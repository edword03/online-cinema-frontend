import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { useDebounce } from '@/hooks/useDebounce';

import { userService } from '@/services/user/user.service';

import { convertDate } from '@/utils/date/convertDate';
import { toastError } from '@/utils/error/toast-error';

import { TableItemType } from '@/types/table-item';

import { getAdminUrl } from '@/config/url.config';

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => userService.getAllUsers(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): TableItemType => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						tableItems: [user.email, convertDate(user.createdAt)],
					})
				),
			onError: (error) => {
				toastError(error);
			},
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const { mutateAsync: deleteUser } = useMutation(
		'delete user',
		(userId: string) => userService.deleteUser(userId),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: () => {
				toast.success('User delete was successful');
        queryData.refetch()
			},
		}
	);

	return useMemo(() => ({
    handleSearch, deleteUser, ...queryData, searchTerm, 
  }), [queryData, deleteUser, searchTerm]);
};
