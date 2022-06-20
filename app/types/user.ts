import { UserModel } from '@/models/user';

export interface UserData {
	email: string;
	password: string;
}

export interface Tokens {
	accessToken: string;
	refreshToken: string;
}

export interface UserResponse extends Tokens {
	user: UserModel;
}

export interface UserState {
	email: string;
	isAdmin: boolean;
}
