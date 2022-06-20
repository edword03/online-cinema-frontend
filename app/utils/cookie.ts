import Cookies from 'js-cookie';

import { Tokens } from '@/types/user';

export const saveTokens = (data: Tokens) => {
	Cookies.set('accessToken', data.accessToken);
	Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokens = () => {
	Cookies.remove('accessToken');
	Cookies.remove('refreshToken');
};
