import axiosClient from "./axiosClient";
import { buildSupabaseUrl } from "../Utils/buildSupabaseQuery";


const CARD_FIELDS =
  "id,name,slug,price,old_price,image_url,brand,weight,stock,rating,review_count,is_featured,is_new,is_sale,categories(name,slug)";

export async function fetchProducts({
  categoryId,
  order = "id.asc",
  limit = 12,
  offset = 0,
  textSearch,
  rangeGte,
  rangeLte,
} = {}) {
  const filters = {};
  if (categoryId) filters.category_id = categoryId;

  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters,
    rangeGte,
    rangeLte,
    textSearch,
    order,
    limit,
    offset,
  });
  const response = await axiosClient.get(url);
  const contentRange = response.headers["content-range"];
  const total = contentRange ? parseInt(contentRange.split("/")[1]) : 0;
  return { data: response.data, total };
}

export async function fetchProductById(id) {
  const url = buildSupabaseUrl("products", {
    select: "*,categories(name,slug)",
    filters: { id },
    limit: 1,
  });
  const response = await axiosClient.get(url);
  return response.data[0] ?? null;
}

export async function fetchPopularProducts(limit = 10) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters: { is_featured: true },
    order: "rating.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchDailyBestSells(limit = 8) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters: { is_sale: true },
    order: "rating.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchDeals(limit = 4) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters: { is_sale: true },
    order: "review_count.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchTopSelling(limit = 3) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters: { is_featured: true },
    order: "review_count.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchTrending(limit = 3) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    filters: { is_new: true },
    order: "rating.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchRecentlyAdded(limit = 3) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    order: "created_at.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}

export async function fetchTopRated(limit = 3) {
  const url = buildSupabaseUrl("products", {
    select: CARD_FIELDS,
    order: "rating.desc",
    limit,
  });
  const response = await axiosClient.get(url);
  return response.data;
}
