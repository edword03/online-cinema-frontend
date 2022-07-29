import dynamic from 'next/dynamic';
import { FC } from 'react';

import { PopularMovies } from './PopularMovies';

const FavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
);

export const MovieContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	);
};
