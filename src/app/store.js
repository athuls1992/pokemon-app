import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemon/pokemonSlice";

// Create the Redux store
const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer, // The Pokemon API reducer is added to the store under the key defined in the Pokemon API configuration
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(pokemonApi.middleware), // The Pokemon API middleware is added to the middleware stack
});

// Setup listeners for the Pokemon API
setupListeners(store.dispatch);

export default store;
