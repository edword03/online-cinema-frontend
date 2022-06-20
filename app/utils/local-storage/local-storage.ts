import { saveTokens } from '@/utils/cookie';

import { UserResponse } from '@/types/user';

export const getUserFromLocalStore = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}

	return null;
};

export const saveToStorage = (data: UserResponse) => {
	saveTokens(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};
