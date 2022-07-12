import axios from 'axios';

import { MovieEditInput } from '@/types/edit-types/edit-movie';

import axiosAuth from '@/api/interceptors';
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

	async create() {
		return await axiosAuth.post<string>(getMoviesUrl(''));
	},

	async getById(_id: string) {
		return await axiosAuth.get<MovieEditInput>(getMoviesUrl(_id));
	},

	async update(_id: string, body: MovieEditInput) {
		return await axiosAuth.put(getMoviesUrl(_id), body);
	},

	async deleteMovie(_id: string) {
		return await axiosAuth.delete<string>(getMoviesUrl(_id));
	},
};
