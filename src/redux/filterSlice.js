import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    form: '',
    equipment: {
      automatic: false,
      petrol: false,
      ac: false,
      bathroom: false,
      kitchen: false,
      tv: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setEquipment(state, action) {
      state.equipment = action.payload;
    },
    clearFilters(state) {
      state.location = "";
      state.form = "";
      state.equipment = {
        automatic: false,
        petrol: false,
        ac: false,
        bathroom: false,
        kitchen: false,
        tv: false,
        radio: false,
        refrigerator: false,
        microwave: false,
        gas: false,
        water: false,
      };
    },
  },
});

export const {
  setLocation,
  setForm,
  setEquipment,
  clearFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
