import { configureStore, type ConfigureStoreOptions } from '@reduxjs/toolkit';
import counter from './features/counter/slice';

export const makeStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) => {
  return configureStore({
    reducer: {
      counter,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
    ...options,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
