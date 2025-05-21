import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sampleApi = createApi({
  reducerPath: "sampleApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${import.meta.env.VITE_API_PATH_PREFIX}/auth/`,
    credentials: "include",
  }),
//   tagTypes: ["User"],
  endpoints: (builder) => ({
    // registerUser: builder.mutation({
    //   query: (data) => ({
    //     url: "register/",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // verifyEmail: builder.query({
    //   query: (token) => ({
    //     url: `verify-email/?token=${token}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  //   useRegisterUserMutation,
} = sampleApi;
