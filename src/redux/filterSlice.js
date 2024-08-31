import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    radio: false,
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    toggleAC(state) {
      state.AC = !state.AC;
    },
    toggleBathroom(state) {
      state.bathroom = !state.bathroom;
    },
    toggleKitchen(state) {
      state.kitchen = !state.kitchen;
    },
    toggleTV(state) {
      state.TV = !state.TV;
    },
    toggleRadio(state) {
      state.radio = !state.radio;
    },
  },
});

export const {
  setLocation,
  setForm,
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
  toggleRadio,
} = filtersSlice.actions;

export default filtersSlice.reducer;
