import axios from 'axios';
import axiosAuth from '@/api/interceptors';


import { getGenresUrl } from '@/config/api.config';
import { GenreModel } from '@/models/genre';

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

	async deleteGenre(_id: string) {
		return await axiosAuth.delete<string>(getGenresUrl(_id))
	}
};
