import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFilters(state) {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
