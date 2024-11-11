import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import initialState from './initialState';

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true, // This is optional because `devTools` is enabled by default
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
