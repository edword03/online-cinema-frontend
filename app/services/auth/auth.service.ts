import axios from 'axios';
import Cookies from 'js-cookie';

import { removeTokens } from '@/utils/cookie';
import { saveToStorage } from '@/utils/local-storage/local-storage';

import { UserResponse } from '@/types/user';

import { getAuthUrl } from '@/config/api.config';

export const authService = {
	async login(email: string, password: string) {
		const response = await axios.post<UserResponse>(getAuthUrl('login'), {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},

	async register(email: string, password: string) {
		const response = await axios.post<UserResponse>(getAuthUrl('register'), {
			email,
			password,
		});

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},
	logout() {
		removeTokens();
		localStorage.removeItem('user');
	},

	async updateTokens() {
		const refreshToken = Cookies.get('refreshToken');

		const response = await axios.post(
			getAuthUrl('login/access-token'),
			{
				refreshToken,
			},
			{
				headers: {
					'Content-type': 'application/json',
				},
			}
		);

		if (response.data.accessToken) {
			saveToStorage(response.data);
		}

		return response;
	},
};
