// Селектори для кемперів
export const selectCampers = (state) => state.campers.items;
export const selectCampersStatus = (state) => state.campers.status;
export const selectCampersError = (state) => state.campers.error;
export const selectFavorites = (state) => state.campers.favorites;

// Селектори для фільтрів
export const selectFilters = (state) => state.filters;
export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectACFilter = (state) => state.filters.AC;
export const selectKitchenFilter = (state) => state.filters.kitchen;
