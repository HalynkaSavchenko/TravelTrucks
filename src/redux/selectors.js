// Селектори для кемперів
export const selectCampers = (state) => state.campers.items;
export const selectIsLoading = (state) => state.campers.loading;
export const selectIsError = (state) => state.campers.error;
export const selectCamperById = (state, id) => {
  return state.campers.items.find((camper) => camper.id === id);
};

// Селектори для фільтрів
export const selectFilters = (state) => state.filters;
export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectEquipmentFilter = (state) => state.filters.equipment;

