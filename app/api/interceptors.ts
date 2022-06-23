import axios from 'axios';
import Cookies from 'js-cookie';

import { authService } from '@/services/auth/auth.service';

import { removeTokens } from '@/utils/cookie';
import { errorCatch } from '@/utils/error/error-catch';

import { API_URL } from '@/config/api.config';

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-type': 'application/json',
	},
});

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken)
		config.headers.Authorize = `Bearer ${accessToken}`;

	return config;
});

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (
			error.response.status === 401 ||
			errorCatch(error) === 'jwt expired' ||
			(errorCatch(error) === 'jwt must be provided' &&
				error.config &&
				!error.config._isRetry)
		) {
			originalRequest._isRetry = true;

			try {
				await authService.updateTokens();
				return instance.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokens();
			}
		}

		throw error;
	}
);

export default instance;
