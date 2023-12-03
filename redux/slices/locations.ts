import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Location {
  id: number;
  name: string;
}

interface Character {
  id: number;
  name: string;
  status : string;
  image : string
  species : string
}
interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getLocations: builder.query<ListResponse<Location[]>, number | void>({
      query: (page = 1) => `location?page=${page}`,
    }),
    getCharacter: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetLocationsQuery, useGetCharacterQuery } = api;
