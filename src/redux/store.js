import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore,
    FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import campersReducer from './campersSlice';
import filtersReducer from './filterSlice';

const campersPersistConfig = {
    key: 'campers',
    storage,
    whitelist: ['favorites'], 
  };
  
  const filtersPersistConfig = {
    key: 'filters',
    storage,
  };
  
  
  export const store = configureStore({
    reducer: {
        campers: persistReducer(campersPersistConfig, campersReducer),
        filters: persistReducer(filtersPersistConfig, filtersReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  });
  
  export const persistor = persistStore(store);