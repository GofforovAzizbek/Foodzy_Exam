import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDeals } from "../../Hooks/useProducts";
import StarRating from "../Ui/StarRating";

import deal1 from "../../assets/images/DealsOfTheDay1.png";
import deal2 from "../../assets/images/DealsOfTheDay2.png";
import deal3 from "../../assets/images/DealsOfTheDay3.png";
import deal4 from "../../assets/images/DealsOfTheDay4.png";

const FALLBACK_IMAGES = [deal1, deal2, deal3, deal4];


function SkeletonDeal() {
  return (
    <div className="rounded-xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-100" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/2" />
        <div className="h-3 bg-gray-100 rounded w-1/4" />
      </div>
    </div>
  );
}

export default function DealsOfTheDay() {
  const { data: deals = [], isLoading } = useDeals(4);

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] font-bold leading-none text-[#253D4E]">
          Deals Of The Day
        </h2>
        <Link
          to="/shop?deals=true"
          className="flex items-center gap-1 text-sm font-medium text-[#7E7E7E] hover:text-[#253D4E]"
        >
          All Deals →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonDeal key={i} />)
          : deals.map((deal, idx) => (
              <DealCard
                key={deal.id}
                deal={deal}
                fallbackImage={FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length]}
              />
            ))}
      </div>
    </section>
  );
}

function DealCard({ deal, fallbackImage }) {
  const { id, name, price, old_price, image_url, rating, review_count, brand } =
    deal;

  return (
    <Link
      to={`/product/${id}`}
      className="group relative block overflow-hidden rounded-2xl bg-[#F8F8F8]"
    >
      <div className="h-[336px] overflow-hidden">
        <img
          src={image_url || fallbackImage}
          alt={name}
          className="w-full h-full object-cover
                     group-hover:scale-105 transition-transform duration-400"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white p-6 shadow-[0_18px_32px_rgba(15,23,42,0.10)]">
        <p
          className="mb-2 line-clamp-2 text-[18px] font-semibold leading-[1.25] text-[#253D4E]
                      transition-colors group-hover:text-[#E44B26]"
        >
          {name}
        </p>

        <div className="mb-1">
          <StarRating rating={rating} count={review_count} />
        </div>

        {brand && (
          <p className="mb-4 text-sm text-[#B6B6B6]">
            By <span className="text-[#3BB77E]">{brand}</span>
          </p>
        )}

        <div className="mt-2 flex items-center justify-between gap-3">
          <div>
            <span className="text-[28px] font-bold leading-none text-[#3BB77E]">
              ${price}
            </span>
            {old_price && (
              <span className="ml-2 text-sm text-[#ADADAD] line-through">
                ${old_price}
              </span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="flex h-9 items-center gap-1.5 rounded-[4px] bg-[#F53E32] px-4
                       text-sm font-semibold text-white transition-colors hover:bg-[#dc3429]"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
