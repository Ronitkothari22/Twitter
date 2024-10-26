import { configureStore, combineReducers } from "@reduxjs/toolkit"; // Import tools to create the store
import userSlice from "./userSlice"; // The part of the state for handling user data
import tweetSlice from "./tweetSlice"; // The part of the state for handling tweet data
import activeReducer from './activeSlice';
// These imports help us save the data to the browser so it can persist (stick around) after refreshes
import {
    persistStore,     // Helps in creating a persistent version of the store
    persistReducer,   // A wrapper to make the reducer "persistent"
    FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, // Special redux-persist actions
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // We use the browser's localStorage

// Configuration for how we want to save the Redux state
const persistConfig = {
    key: 'root',   // The key used to store the data in localStorage
    version: 1,    // Version of the state
    storage,       // Use the localStorage from the browser
};

// Combine the user data and tweet data into one big storage container
const rootReducer = combineReducers({
    user: userSlice,  // user slice manages the user-related data
    tweet: tweetSlice,
    active: activeReducer,  // tweet slice manages tweet-related data
});

// Wrap the rootReducer with persistReducer to allow it to be saved in the browser's storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer, // Use the persisted version of our reducers
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Ignore some redux-persist actions in middleware checks to avoid errors
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Export the store so it can be used in the app
export default store;
