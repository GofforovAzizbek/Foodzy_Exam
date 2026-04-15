import { useQuery } from "@tanstack/react-query";
import api from "@/config/axios";
import { mapProduct } from "@/utils/format";

const getCategories = async () => {
  const { data } = await api.get("/products/categories");
  return [
    "All",
    ...data.map((item) => (typeof item === "string" ? item : item.slug)),
  ];
};

const getFeaturedProducts = async () => {
  const { data } = await api.get("/products?limit=8");
  return data.products.map(mapProduct);
};

export const useCategoriesQuery = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

export const useFeaturedProductsQuery = () =>
  useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });
