import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Location {
  id: number;
  name: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getLocations: builder.query<Location[], void>({
      query: () => 'location',
    }),
  }),
});

export const { useGetLocationsQuery } = api;
