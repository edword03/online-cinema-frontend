import axios from 'axios';

import { getMoviesUrl } from '@/config/api.config';
import { MovieModel } from '@/models/movie';

export const movieService = {
	async getAllMovies(searchTerm?: string) {
		return await axios.get<MovieModel[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
	async getMostPopularMovies() {
		const { data: movies } = await axios.get<MovieModel[]>(
			getMoviesUrl('most-popular')
		);

		return movies;
	},
};
