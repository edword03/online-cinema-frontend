import axios from 'axios';

import { getGenresUrl } from '@/config/api.config';
import { GenreModel } from '@/models/movie';

export const genreService = {
	async getAll(searchTerm?: string) {
		return await axios.get<GenreModel[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
};
