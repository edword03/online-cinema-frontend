import axios from 'axios';

import { EditActor } from '@/types/edit-types/edit-actor';

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
	async getById(_id: string) {
		return await axiosAuth.get<EditActor>(getActorsUrl(_id));
	},

	async create() {
		return await axiosAuth.post<string>(getActorsUrl(''));
	},

	async update(_id: string, body: EditActor) {
		return axiosAuth.put<string>(getActorsUrl(_id), body);
	},

	async deleteActor(_id: string) {
		return await axiosAuth.delete<string>(getActorsUrl(_id));
	},
};
