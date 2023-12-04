import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  status: 'all' | 'dead' | 'alive' | 'unknown';
}

const initialState: FilterState = {
  status: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<FilterState['status']>) => {
      state.status = action.payload;
    },
  },
});

export const { setFilterStatus } = filterSlice.actions;
export default filterSlice.reducer;
