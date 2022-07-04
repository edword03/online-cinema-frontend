import axios from '@/api/interceptors';
import { getUsersUrl } from '@/config/api.config';
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

	async deleteUser(_id: string) {
		return await axios.delete<string>(getUsersUrl(`${_id}`));
	},
};
