import { configureStore, createSlice } from '@reduxjs/toolkit';
import { api } from './slices/locations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { status: 'all' },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    resetStatus: (state) => {
      state.status = 'all';
    },
  },
});

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const { setStatus, resetStatus } = filterSlice.actions;

export const selectFilterStatus = (state) => state.filter.status;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
