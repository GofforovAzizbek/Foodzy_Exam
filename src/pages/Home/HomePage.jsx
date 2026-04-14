import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { useFeaturedProductsQuery } from "@/services/catalogQueries";
import HeroSection from "@/components/home/HeroSection";
import PromoGrid from "@/components/home/PromoGrid";
import FeatureStrip from "@/components/home/FeatureStrip";
import CountdownBanner from "@/components/home/CountdownBanner";
import TestimonialSection from "@/components/home/TestimonialSection";
import NewsSection from "@/components/home/NewsSection";
import ProductGrid from "@/components/products/ProductGrid";
import cart1 from "@/assets/images/cart1.png";
import cart2 from "@/assets/images/cart2.png";
import heroBg from "@/assets/images/heroBg.png";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: featuredProducts = [], isLoading } = useFeaturedProductsQuery();

  return (
    <>
      <HeroSection />
      <PromoGrid />
      <section className="py-8 sm:py-10">
        <div className="app-container">
          <div className="mb-8 text-center">
            <h2 className="text-[28px] font-bold text-[#2b2b2d] sm:text-[34px]">Popular Products</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#7a7a7a]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[261px,1fr]">
            <div className="space-y-4">
              <div className="border border-[#ededed] bg-white">
                {["All", "Snack", "Vegetables", "Fruit", "Bakery"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="flex min-h-[52px] w-full items-center justify-between border-b border-[#efefef] px-4 text-left text-[13px] text-[#2b2b2d] transition hover:text-[#f53e32]"
                  >
                    <span>{item}</span>
                    <span className="text-[#909090]">+</span>
                  </button>
                ))}
              </div>
              <div className="relative overflow-hidden">
                <img src={cart1} alt="Juicy fruits" className="h-[430px] w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.58))]" />
                <div className="absolute left-5 top-6 text-white">
                  <h3 className="max-w-[120px] text-[36px] font-extrabold uppercase leading-[0.95]">
                    Juicy Fruits
                  </h3>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-white/70">100% Natural</p>
                  <button
                    type="button"
                    className="mt-5 rounded-[4px] bg-[#f53e32] px-4 py-[7px] text-[12px] font-medium text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <ProductGrid
              products={featuredProducts.slice(0, 6)}
              loading={isLoading}
              onAddToCart={(product) => dispatch(addToCart(product))}
            />
          </div>
        </div>
      </section>
      <FeatureStrip />
      <CountdownBanner />
      <section className="py-8 sm:py-10">
        <div className="app-container grid gap-6 lg:grid-cols-[1fr,1fr,1.35fr]">
          {[
            { title: "Pasta", image: cart1 },
            { title: "Pizza", image: cart2 },
            { title: "Organic & Healthy Vegetables", image: heroBg },
          ].map((item, index) => (
            <div key={item.title} className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover ${index === 2 ? "h-[320px]" : "h-[320px]"}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.32))]" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className={`${index === 2 ? "max-w-[220px]" : "max-w-[140px]"} text-[28px] font-bold leading-[1.1]`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] font-semibold text-white/85">25% Off</p>
                <button
                  type="button"
                  className="mt-4 rounded-[4px] bg-[#f53e32] px-4 py-[7px] text-[12px] font-medium text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <TestimonialSection />
      <NewsSection />
    </>
  );
};

export default HomePage;
