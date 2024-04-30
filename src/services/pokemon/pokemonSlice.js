import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
	reducerPath: "pokemonApi", // The reducer path is used as the key in the Redux store for this API slice
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pokeapi.co/api/v2/pokemon", // The base URL for the Pokemon API
	}),
	endpoints: (builder) => ({
		getAllPokemon: builder.query({
			query: () => ({
				url: "",
				method: "GET",
			}),
		}),
		getMoreDetails: builder.query({
			query: (url) => ({
				url: url,
				method: "GET",
			}),
		}),
		// The getRangeData endpoint is used to fetch a range of Pokemon data
		getRangeData: builder.query({
			query: (offset) => ({
				url: `?offset=${offset}&limit=20`, // The URL for this endpoint includes query parameters for offset and limit
				method: "GET",
			}),
		}),
		getSinglePokemon: builder.query({
			query: (name) => ({
				url: name,
				method: "GET",
			}),
		}),
	}),
});

// Export hooks for each endpoint for use in components
export const {
	useGetAllPokemonQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
	useGetSinglePokemonQuery,
} = pokemonApi;
