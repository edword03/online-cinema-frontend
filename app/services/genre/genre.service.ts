import axios from 'axios';

import { EditGenreInput } from '@/types/edit-types/edit-genre';

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

	async create() {
		return await axiosAuth.post<string>(getGenresUrl(''));
	},

	async getById(id: string) {
		return await axiosAuth.get<EditGenreInput>(getGenresUrl(id));
	},

	async getBySlug(slug: string) {
		return await axios.get<GenreModel>(getGenresUrl(`by-slug/${slug}`));
	},

	async update(id: string, body: EditGenreInput) {
		return await axiosAuth.put<string>(getGenresUrl(id), body);
	},

	async deleteGenre(_id: string) {
		return await axiosAuth.delete<string>(getGenresUrl(_id));
	},
};
