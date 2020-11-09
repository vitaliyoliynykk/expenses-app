import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../containers/Auth/store/reducer';

export const rootReducer = combineReducers({ auth: authReducer });
