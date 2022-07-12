import axios from 'axios';

import { EditActorInput } from '@/types/edit-types/edit-actor';

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
		return await axiosAuth.get<EditActorInput>(getActorsUrl(_id));
	},

	async create() {
		return await axiosAuth.post<string>(getActorsUrl(''));
	},

	async update(_id: string, body: EditActorInput) {
		return axiosAuth.put<string>(getActorsUrl(_id), body);
	},

	async deleteActor(_id: string) {
		return await axiosAuth.delete<string>(getActorsUrl(_id));
	},
};
