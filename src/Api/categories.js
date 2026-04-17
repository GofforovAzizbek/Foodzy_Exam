import axiosClient from "./axiosClient";
import { buildSupabaseUrl } from "../Utils/buildSupabaseQuery";

export async function fetchCategories() {
  const url = buildSupabaseUrl("categories", {
    select: "id,name,slug",
    order: "id.asc",
  });
  const response = await axiosClient.get(url);
  return response.data;
}
