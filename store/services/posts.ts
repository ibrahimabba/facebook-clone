import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../../utils/axiosBaseQuery';

export const postsApi = createApi({
  reducerPath: 'postsReducer',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => ({ url: '/posts?_expand=user', method: 'GET' }),
      transformResponse: (response: object) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postsApi;
