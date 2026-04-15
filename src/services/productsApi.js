import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "@/config/axios";
import { mapProduct } from "@/utils/format";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ limit = 12, skip = 0, category, search } = {}) => {
        if (search) {
          return `/products/search?q=${encodeURIComponent(search)}&limit=${limit}&skip=${skip}`;
        }

        if (category && category !== "All") {
          return `/products/category/${category}?limit=${limit}&skip=${skip}`;
        }

        return `/products?limit=${limit}&skip=${skip}`;
      },
      transformResponse: (response) => ({
        ...response,
        products: response.products.map(mapProduct),
      }),
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (response) => mapProduct(response),
      providesTags: ["Products"],
    }),
    getRelatedProducts: builder.query({
      query: ({ category, limit = 4 }) =>
        `/products/category/${category}?limit=${limit}`,
      transformResponse: (response) => response.products.map(mapProduct),
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetRelatedProductsQuery,
} = productsApi;
