import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { useDebounce } from '@/hooks/useDebounce';

import { actorsService } from '@/services/actors/actors.service';

import { toastError } from '@/utils/error/toast-error';

import { TableItemType } from '@/types/table-item';

import { getAdminUrl } from '@/config/url.config';

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const debouncedSearch = useDebounce(searchTerm, 500);

	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => actorsService.getAllActors(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(actor): TableItemType => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actors/edit/${actor._id}`),
						tableItems: [actor.name, String(actor.countMovies)],
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

	const { mutateAsync: deleteActor } = useMutation(
		'delete actor',
		(actorId: string) => actorsService.deleteActor(actorId),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: () => {
				toast.success('Actor delete was successful');
				queryData.refetch();
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			deleteActor,
			...queryData,
			searchTerm,
		}),
		[queryData, deleteActor, searchTerm]
	);
};
