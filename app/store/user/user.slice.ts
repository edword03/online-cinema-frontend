import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
  extraReducers(builder) {
    builder.addCase
  },
});

export const { reducer } = userSlice;
