import { createSlice } from '@reduxjs/toolkit';

import { getUserFromLocalStore } from '@/utils/local-storage/local-storage';

import { UserState } from '@/types/user';

import { checkAuth, login, logout, register } from './user.action';

interface InitialState {
	user: UserState | null;
	isLoading: boolean;
	isError: boolean;
}

const initialState: InitialState = {
	user: getUserFromLocalStore('user'),
	isLoading: false,
	isError: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
				state.isError = true;
			})
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
				state.isError = true;
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false;
				state.user = null;
				state.isError = false;
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.user = action.payload.user;
			});
	},
});

export const { reducer } = userSlice;
