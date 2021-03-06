import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { authService } from '@/services/auth/auth.service';

import { errorCatch } from '@/utils/error/error-catch';
import { toastError } from '@/utils/error/toast-error';

import { UserData, UserResponse } from '@/types/user';

export const login = createAsyncThunk<UserResponse, UserData>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await authService.login(email, password);
			toast.success('Successfully logged in');
			return await response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const register = createAsyncThunk<UserResponse, UserData>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await authService.register(email, password);
			toast.success('Successfully signed up');
			return await response.data;
		} catch (error) {
			toastError(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await authService.logout();
});

export const checkAuth = createAsyncThunk<UserResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await authService.updateTokens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toast.error('Your authorization is finished please sign in again');
				thunkAPI.dispatch(logout());
			}

			return thunkAPI.rejectWithValue(error);
		}
	}
);
