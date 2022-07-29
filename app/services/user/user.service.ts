import { ProfileInput } from '@/components/screens/profile/profile.interface';

import axios from '@/api/interceptors';
import axiosAuth from '@/api/interceptors';
import { getUsersUrl } from '@/config/api.config';
import { MovieModel } from '@/models/movie';
import { UserModel } from '@/models/user';

export const userService = {
	async getAllUsers(searchTerm?: string) {
		return await axios.get<UserModel[]>(getUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async getFavoriteMovies() {
		return axiosAuth.get<MovieModel[]>(getUsersUrl(`profile/favorites`));
	},

	async toggleFavorite(movieId: string) {
		return axiosAuth.put(getUsersUrl('profile/favorites'), {
			movieId,
		});
	},

	async getProfile() {
		return await axios.get<UserModel>(getUsersUrl('profile'));
	},

	async getById(id: string) {
		return await axiosAuth.get<UserModel>(getUsersUrl(id));
	},

	async updateProfile(body: ProfileInput) {
		return await axios.put<string>(getUsersUrl('profile'), body);
	},

	async update(id: string, body: ProfileInput) {
		return await axiosAuth.put<string>(getUsersUrl(id), body);
	},

	async deleteUser(_id: string) {
		return await axios.delete<string>(getUsersUrl(`${_id}`));
	},
};
