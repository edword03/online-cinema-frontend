import { FC } from 'react';

import { FavoriteMovies } from './FavoriteMovies/FavoriteMovies';
import { PopularMovies } from './PopularMovies';

export const MovieContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	);
};
