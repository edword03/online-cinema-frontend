import React from 'react';

import { Meta } from '@/components/SEO/Meta';

import { Heading } from '@/ui/Heading/Heading';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin-table/adminTable';

import { useGenres } from './useGenresList';

export const GenresList = () => {
	const {
		searchTerm,
		deleteGenre,
		isLoading,
		handleSearch,
		data,
		createAsync,
	} = useGenres();

	return (
		<>
			<Meta title="Genres" />
			<AdminNav />
			<Heading title="Genres" />
			<AdminHeader
				searchTerm={searchTerm}
				onChange={handleSearch}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				tableItems={data || []}
				removeHandler={deleteGenre}
			/>
		</>
	);
};
