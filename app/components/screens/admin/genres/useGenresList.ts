import { useRouter } from 'next/router';
import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { useDebounce } from '@/hooks/useDebounce';

import { genreService } from '@/services/genre/genre.service';

import { toastError } from '@/utils/error/toast-error';

import { TableItemType } from '@/types/table-item';

import { getAdminUrl } from '@/config/url.config';

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const debouncedSearch = useDebounce(searchTerm, 500);
	const { push } = useRouter();

	const queryData = useQuery(
		['genres list', debouncedSearch],
		() => genreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(genre): TableItemType => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						tableItems: [genre.name, genre.slug],
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

	const { mutateAsync: deleteGenre } = useMutation(
		'delete genre',
		(genreId: string) => genreService.deleteGenre(genreId),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: () => {
				toast.success('Genre delete was successful');
				queryData.refetch();
			},
		}
	);

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => genreService.create(),
		{
			onError: (error) => {
				toastError(error);
			},
			onSuccess: ({ data: _id }) => {
				toast.success('Genre created was successful');
				queryData.refetch();
				push(getAdminUrl(`genre/edit/${_id}`));
			},
		}
	);

	return useMemo(
		() => ({
			handleSearch,
			deleteGenre,
			...queryData,
			searchTerm,
			createAsync,
		}),
		[queryData, deleteGenre, searchTerm, createAsync]
	);
};
