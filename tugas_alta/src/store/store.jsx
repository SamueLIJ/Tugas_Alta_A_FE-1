import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import { persistStore, persistReducer } from "redux-persist";
  import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from "redux-persist/es/constants";
  import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
  import todoSlice from "./todoSlice";
  import contactSlice from "./contactSlice";
  import newsSlice from "./newSlice";
  
  const reducers = combineReducers({
    todo: todoSlice,
    contact: contactSlice,
    news: newsSlice,
  });
  
  const persistConfig = {
    key: "root",
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  const persistore = persistStore(store);
  
  export { store, persistore };