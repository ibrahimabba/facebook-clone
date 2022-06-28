import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import postsReducer from './reducers/postsReducer';
import userReducer from './reducers/userReducer';
import storiesReducer from './reducers/storiesReducer';
import showingStroyReducer from './reducers/showingStoryReducer';

const store = configureStore({
  reducer: {
    postsReducer,
    userReducer,
    storiesReducer,
    showingStroyReducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
