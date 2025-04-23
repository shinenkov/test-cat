import { createSlice } from '@reduxjs/toolkit';
import { catApi } from '../api';
import { type CatState } from './types';
import { RootState } from '../../appStore';

const initialState: CatState = {
  list: [],
};

export const catsSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    setCatData: (state, action) => {
      state.list = action.payload;
    },
    clearCatData: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      catApi.endpoints.getCatAsync.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
  },
});

export const selectCatList = (state: RootState) => state.cat.list;

export const { clearCatData, setCatData } = catsSlice.actions;
