import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
