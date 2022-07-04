import axios from 'axios';

import axiosAuth from '@/api/interceptors';
import { getActorsUrl } from '@/config/api.config';
import { ActorModel } from '@/models/actor';

export const actorsService = {
	async getAllActors(searchTerm?: string) {
		return axios.get<ActorModel[]>(getActorsUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},

	async deleteActor(_id: string) {
		return await axiosAuth.delete<string>(getActorsUrl(_id));
	},
};
