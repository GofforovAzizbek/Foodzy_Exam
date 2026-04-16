import { useState } from "react";
import { usePopularProducts } from "../../Hooks/useProducts";
import { useCategories } from "../../Hooks/useCategories";
import ProductCard from "../Ui/ProductCard";

export default function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: products = [], isLoading } = usePopularProducts(20);
  const { data: categories = [] } = useCategories();

  const tabs = ["All", ...categories.map((c) => c.name)];

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.categories?.name === activeCategory);

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-12">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        {/* TITLE */}
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#253D4E]">
          Popular Products
        </h2>

        {/* TABS */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveCategory(tab)}
              className={`
                text-[14px] md:text-[15px] font-semibold transition-all
                ${
                  activeCategory === tab
                    ? "text-[#3BB77E]"
                    : "text-[#7E7E7E] hover:text-[#3BB77E]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
          : filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
}

/* SKELETON */
function SkeletonCard() {
  return (
    <div className="rounded-[12px] border border-[#ECECEC] p-4 animate-pulse bg-white">
      <div className="h-32 bg-gray-100 rounded-lg mb-4" />
      <div className="h-3 bg-gray-100 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-2/3 mb-3" />
      <div className="h-6 bg-gray-100 rounded w-full" />
    </div>
  );
}
