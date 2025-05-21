import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  //   [authApi.reducerPath]: authApi.reducer,
  //   user: userSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat
      //   authApi.middleware,
      //   portfolioApi.middleware
      (),
});
