import { combineReducers } from '@reduxjs/toolkit';
import { mockApi } from '../api/mockApi';
import { catsSlice } from './cats/index';

export const rootReducer = combineReducers({
  [mockApi.reducerPath]: mockApi.reducer,
  [catsSlice.name]: catsSlice.reducer,
});
