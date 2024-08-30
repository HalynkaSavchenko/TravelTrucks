import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    favorites: [],
  },
  reducers: {
    addToFavorites(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;

export default campersSlice.reducer;
