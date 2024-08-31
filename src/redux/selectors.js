// Селектори для кемперів
export const selectCampers = (state) => state.campers.items;
export const selectName = (state) => state.campers.items.name;
export const selectPrice = (state) => state.campers.items.price;
export const selectRating = (state) => state.campers.items.rating;
export const selectLocation = (state) => state.campers.items.location;
export const selectDescription = (state) => state.campers.items.description;
export const selectTransmission = (state) => state.campers.items.selectTransmission;
export const selectEngine = (state) => state.campers.items.engine;
export const selectKitchen = (state) => state.campers.items.kitchen;
export const selectAC = (state) => state.campers.items.AC;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsError = (state) => state.campers.isError;
export const selectFavorites = (state) => state.campers.favorites;

// Селектори для фільтрів
export const selectFilters = (state) => state.filters;
export const selectLocationFilter = (state) => state.filters.location;
export const selectFormFilter = (state) => state.filters.form;
export const selectACFilter = (state) => state.filters.AC;
export const selectBathroomFilter = (state) => state.filters.bathroom;
export const selectKitchenFilter = (state) => state.filters.kitchen;
export const selectTVFilter = (state) => state.filters.TV;
export const selectRadioFilter = (state) => state.filters.radio;
