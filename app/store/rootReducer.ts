import { combineReducers } from '@reduxjs/toolkit';

import { reducer as userReducer } from './user/user.slice';

export const rootReducer = combineReducers({
	user: userReducer,
});
