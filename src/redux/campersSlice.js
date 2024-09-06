import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  // reducers: {
  //   addToFavorites(state, action) {
  //     if (!state.favorites.includes(action.payload)) {
  //       state.favorites.push(action.payload);
  //     }
  //   },
  //   removeFromFavorites(state, action) {
  //     state.favorites = state.favorites.filter(id => id !== action.payload);
  //   },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.payload;
        state.loading = false;
        state.items = [];
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.error = false;
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
  });

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;

export default campersSlice.reducer;
