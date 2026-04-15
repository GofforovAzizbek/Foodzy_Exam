import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineEye, HiOutlineHeart } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import PageHero from "@/components/common/PageHero";
import QuantityControl from "@/components/common/QuantityControl";
import RatingStars from "@/components/common/RatingStars";
import ProductGallery from "@/components/products/ProductGallery";
import ProductTabs from "@/components/products/ProductTabs";
import ProductGrid from "@/components/products/ProductGrid";
import FiltersSidebar from "@/components/products/FiltersSidebar";
import { addToCart } from "@/features/cart/cartSlice";
import { useCategoriesQuery } from "@/services/catalogQueries";
import { useGetProductByIdQuery, useGetRelatedProductsQuery } from "@/services/productsApi";
import { formatCurrency } from "@/utils/format";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: categories = [] } = useCategoriesQuery();
  const { data: product, isLoading } = useGetProductByIdQuery(productId);
  const [selectedImage, setSelectedImage] = useState("");
  const relatedQuery = useGetRelatedProductsQuery(
    { category: product?.rawCategory || "groceries", limit: 4 },
    { skip: !product?.rawCategory },
  );

  const currentImage = useMemo(
    () => selectedImage || product?.image,
    [product?.image, selectedImage],
  );

  if (isLoading || !product) {
    return (
      <>
        <PageHero title="Product" />
        <section className="py-16">
          <div className="app-container rounded-[28px] border border-slate-100 bg-white p-10 shadow-soft">
            Loading product...
          </div>
        </section>
      </>
    );
  }

  const addItem = () => dispatch(addToCart({ ...product, quantity }));

  return (
    <>
      <PageHero title="Product" />
      <section className="py-16">
        <div className="app-container grid gap-8 xl:grid-cols-[300px,1fr]">
          <FiltersSidebar
            categories={categories}
            activeCategory={product.rawCategory}
            setActiveCategory={() => {}}
            priceRange={200}
            setPriceRange={() => {}}
          />
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr,1fr]">
              <ProductGallery
                product={product}
                selectedImage={currentImage}
                onSelectImage={setSelectedImage}
              />
              <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-soft">
                <h1 className="text-4xl font-bold leading-tight">{product.name}</h1>
                <p className="mt-4 text-slate-500">{product.description}</p>
                <div className="mt-6">
                  <RatingStars rating={product.rating} reviewText="(75 Review)" />
                </div>
                <div className="mt-6 space-y-3 text-sm text-slate-500">
                  {product.shortSpecs.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[90px,1fr] gap-3">
                      <span className="font-semibold text-slate-900">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-end gap-3">
                  <p className="text-4xl font-black text-brand-primary">
                    {formatCurrency(product.price)}
                  </p>
                  <p className="pb-1 text-lg text-slate-400 line-through">
                    {formatCurrency(product.originalPrice)}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["50kg", "80kg", "120kg", "200kg"].map((size, index) => (
                    <span
                      key={size}
                      className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                        index === 0
                          ? "bg-brand-primary text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <QuantityControl
                    value={quantity}
                    onIncrease={() => setQuantity((value) => value + 1)}
                    onDecrease={() => setQuantity((value) => Math.max(1, value - 1))}
                  />
                  <Button color="failure" className="!bg-brand-primary hover:!bg-brand-primary-dark" onClick={addItem}>
                    Add To Cart
                  </Button>
                  <button type="button" className="rounded-xl border border-slate-200 p-3 text-xl text-slate-500">
                    <HiOutlineHeart />
                  </button>
                  <Link to="/cart" className="rounded-xl border border-slate-200 p-3 text-xl text-slate-500">
                    <HiOutlineEye />
                  </Link>
                </div>
              </div>
            </div>
            <ProductTabs product={product} />
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-black">Popular Products</h2>
                <p className="mt-3 text-slate-500">
                  Matching products from the same category keep the product detail page close to the
                  reference layout.
                </p>
              </div>
              <ProductGrid
                products={relatedQuery.data || []}
                loading={relatedQuery.isLoading}
                onAddToCart={(item) => dispatch(addToCart(item))}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
