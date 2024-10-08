import rootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { encryptTransform } from "redux-persist-transform-encrypt";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
// Configure persist options
const persistConfig = {
  key: "root", // key for the persist storage
  storage, // storage engine
  transforms: [
    encryptTransform({
      secretKey: "$iTrad$",
      onError: function (error) {
        // console.log(error)
      },
    }),
  ],
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['someReducer'],
  // whitelist: ['someOtherReducer']
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
