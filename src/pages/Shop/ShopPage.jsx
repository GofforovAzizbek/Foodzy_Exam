import { useMemo, useState } from "react";
import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import PageHero from "@/components/common/PageHero";
import FiltersSidebar from "@/components/products/FiltersSidebar";
import ProductGrid from "@/components/products/ProductGrid";
import { addToCart } from "@/features/cart/cartSlice";
import { setCategory } from "@/features/ui/uiSlice";
import { useCategoriesQuery } from "@/services/catalogQueries";
import { useGetProductsQuery } from "@/services/productsApi";

const sortProducts = (products, mode) => {
  const list = [...products];

  if (mode === "price-low") {
    return list.sort((a, b) => a.price - b.price);
  }

  if (mode === "price-high") {
    return list.sort((a, b) => b.price - a.price);
  }

  if (mode === "rating") {
    return list.sort((a, b) => b.rating - a.rating);
  }

  return list;
};

const ShopPage = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.ui.searchTerm);
  const activeCategory = useSelector((state) => state.ui.category) || "All";
  const [priceRange, setPriceRange] = useState(160);
  const [sortMode, setSortMode] = useState("featured");
  const { data: categories = [] } = useCategoriesQuery();
  const { data, isLoading } = useGetProductsQuery({
    limit: 12,
    category: activeCategory === "All" ? undefined : activeCategory,
    search: searchTerm || undefined,
  });

  const filteredProducts = useMemo(() => {
    const products = data?.products || [];
    return sortProducts(products.filter((item) => item.price <= priceRange), sortMode);
  }, [data?.products, priceRange, sortMode]);

  return (
    <>
      <PageHero title="Shop" />
      <section className="py-16">
        <div className="app-container grid gap-8 xl:grid-cols-[300px,1fr]">
          <FiltersSidebar
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={(category) => dispatch(setCategory(category))}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[24px] border border-slate-100 bg-white p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-slate-500">
                We found <span className="font-bold text-slate-900">{filteredProducts.length}</span> items
                for you!
              </p>
              <Dropdown inline label="Sort By">
                <Dropdown.Item onClick={() => setSortMode("featured")}>Featured</Dropdown.Item>
                <Dropdown.Item onClick={() => setSortMode("price-low")}>Price: Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => setSortMode("price-high")}>Price: High to Low</Dropdown.Item>
                <Dropdown.Item onClick={() => setSortMode("rating")}>Top Rated</Dropdown.Item>
              </Dropdown>
            </div>
            <ProductGrid
              products={filteredProducts}
              loading={isLoading}
              onAddToCart={(product) => dispatch(addToCart(product))}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
