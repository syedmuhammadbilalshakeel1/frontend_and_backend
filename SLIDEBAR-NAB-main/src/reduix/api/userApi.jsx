import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builders) => ({
    users: builders.query({
      query: () => "/users",
    }),
  }),
});

export const { useUsersQuery } = usersApi;
