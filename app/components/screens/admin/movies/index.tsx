import React from 'react';

import { Meta } from '@/components/SEO/Meta';
import { Heading } from '@/ui/Heading/Heading';
import { AdminNav } from '@/ui/admin-nav/AdminNav';
import { AdminHeader } from '@/ui/admin-table/adminHeader/AdminHeader';
import { AdminTable } from '@/ui/admin-table/adminTable';

import { useMovies } from './useMoviesList';

export const MoviesList = () => {
	const { searchTerm, deleteMovie, isLoading, handleSearch, data } = useMovies();

	return (
		<>
			<Meta title="Movies" />
			<AdminNav />
			<Heading title="Movies" />
			<AdminHeader searchTerm={searchTerm} onChange={handleSearch} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Title', 'Genres', 'Rating']}
				tableItems={data || []}
				removeHandler={deleteMovie}
			/>
		</>
	);
};
