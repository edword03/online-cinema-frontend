import React from 'react';
import { useQuery } from 'react-query';

import { MovieList } from '@/components/layout/Sidebar/MovieContainer/MovieList';

import { SkeletonLoader } from '@/ui/SkeletonLoader';

import { movieService } from '@/services/movie/movie.service';

export const PopularMovies = () => {
	const { isLoading, data, isError } = useQuery(
		'Popular movies-sidebar',
		() => movieService.getMostPopularMovies(),
		{
			select: (data) => data.slice(0, 4),
		}
	);

	if (isLoading)
		return (
			<div className="mt-11">
				<SkeletonLoader count={3} className="h-28 mb-4" />
			</div>
		);

	if (isError) return <p className="text-white">Cannot load popular movies</p>;

	return (
		<MovieList link="/trending" movies={data || []} title="Popular Movies" />
	);
};
