import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../../Store/cartStore";

export default function ProductCard({ product, variant = "default" }) {
  const addItem = useCartStore((s) => s.addItem);

  if (!product) return null;

  const {
    id,
    name,
    price,
    old_price,
    image_url,
    rating,
    review_count,
    is_featured,
    is_new,
    is_sale,
    categories,
    brand,
  } = product;

  const categoryName = categories?.name ?? "";

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }

  function getBadge() {
    if (is_new) return { label: "New", bg: "bg-[#3BB77E]" };
    if (is_sale) return { label: "Sale", bg: "bg-[#4096EE]" };
    if (is_featured) return { label: "Hot", bg: "bg-[#F74B81]" };
    return null;
  }
  const badge = getBadge();

  const discountPct = old_price
    ? Math.round(((old_price - price) / old_price) * 100)
    : null;

  if (variant === "figmaPopular") {
    return (
      <Link
        to={`/product/${id}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[20px]
                   border border-[#ECECEC] bg-white px-3 pb-5 pt-4
                   shadow-[0_10px_26px_rgba(15,23,42,0.05)]
                   transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,23,42,0.08)]"
      >
        {badge && (
          <div className="absolute left-0 top-0 z-10">
            <span
              className={`${badge.bg} inline-flex min-w-[48px] items-center justify-center rounded-br-[12px] rounded-tl-[18px]
                          px-2.5 py-[6px] text-[11px] font-semibold leading-none text-white`}
            >
              {badge.label}
            </span>
          </div>
        )}

        {discountPct && (
          <div className="absolute right-0 top-0 z-10">
            <span
              className="inline-flex min-w-[56px] items-center justify-center rounded-bl-[12px] rounded-tr-[18px]
                         bg-[#F74B81] px-2.5 py-[6px] text-[11px] font-semibold leading-none text-white"
            >
              -{discountPct}%
            </span>
          </div>
        )}

        <div className="relative px-1 pt-3">
          <div className="flex h-[170px] items-center justify-center rounded-[14px] bg-[#F4F6FA] px-4">
            <img
              src={image_url}
              alt={name}
              className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="absolute left-1/2 top-full flex h-9 w-9 -translate-x-1/2 -translate-y-1/2
                       items-center justify-center rounded-full border border-[#DDE3EA] bg-white
                       text-[#9CA3AF] shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-colors
                       hover:border-[#F53E32] hover:bg-[#F53E32] hover:text-white"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart size={14} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-2 pt-10 text-center">
          <p className="mb-1 text-[14px] leading-5 text-[#9CA3AF]">
            {categoryName || "Snack"}
          </p>

          <p
            className="mb-2 line-clamp-2 min-h-[58px] text-[15px] font-semibold
                       leading-[1.35] text-[#253D4E] transition-colors group-hover:text-[#F53E32]"
          >
            {name}
          </p>

          <div className="mb-3 flex items-center justify-center gap-1.5 text-[14px] leading-5">
            <div className="flex items-center gap-[2px] text-[#FDC040]">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s}>{rating >= s ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-[#B6B6B6]">({review_count || 1})</span>
          </div>

          <div className="mt-auto flex items-end justify-center gap-2">
            <span className="text-[16px] font-bold leading-none text-[#F53E32]">
              ${price}
            </span>
            {old_price && (
              <span className="text-[14px] leading-none text-[#9CA3AF] line-through">
                ${old_price}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "figmaPopularWide") {
    return (
      <Link
        to={`/product/${id}`}
        className="group relative flex h-full min-h-[466px] flex-col overflow-hidden rounded-[18px]
                   border border-[#ECECEC] bg-white p-3
                   shadow-[0_8px_22px_rgba(15,23,42,0.04)]
                   transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)]"
      >
        {badge && (
          <div className="absolute left-0 top-0 z-10">
            <span
              className={`${badge.bg} inline-flex min-w-[60px] items-center justify-center rounded-br-[16px] rounded-tl-[18px]
                          px-3 py-2 text-[12px] font-medium leading-none text-white`}
            >
              {badge.label}
            </span>
          </div>
        )}

        {discountPct && (
          <div className="absolute right-0 top-0 z-10">
            <span
              className="inline-flex min-w-[66px] items-center justify-center rounded-bl-[16px] rounded-tr-[18px]
                         bg-[#FDC040] px-3 py-2 text-[12px] font-medium leading-none text-white"
            >
              -{discountPct}%
            </span>
          </div>
        )}

        <div className="mb-5 flex h-[230px] items-center justify-center rounded-[14px] bg-white px-5 pt-8">
          <img
            src={image_url}
            alt={name}
            className="max-h-[175px] max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col px-2">
          <p className="mb-1 text-[13px] leading-5 text-[#ADADAD]">
            {categoryName || "Snack"}
          </p>

          <p
            className="mb-2 line-clamp-2 min-h-[60px] text-[16px] font-semibold
                       leading-[1.35] text-[#253D4E] transition-colors group-hover:text-[#3BB77E]"
          >
            {name}
          </p>

          <div className="mb-2 flex items-center gap-1.5 text-[14px] leading-5">
            <span className="text-[#FDC040]">★</span>
            <span className="text-[#B6B6B6]">({Number(rating || 0).toFixed(1)})</span>
          </div>

          <p className="mb-5 text-[14px] leading-5 text-[#B6B6B6]">
            By{" "}
            <span className="text-[#3BB77E]">{brand || "NestFood"}</span>
          </p>

          <div className="mt-auto flex items-end justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                <span className="text-[28px] font-bold leading-none text-[#3BB77E]">
                  ${price}
                </span>
                {old_price && (
                  <span className="pb-0.5 text-[16px] font-semibold leading-none text-[#ADADAD] line-through">
                    ${old_price}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="inline-flex h-10 min-w-[86px] flex-shrink-0 items-center justify-center gap-2
                         rounded-[4px] bg-[#F53E32] px-4 text-[15px] font-semibold text-white
                         transition-colors hover:bg-[#df3428]"
              aria-label={`Add ${name} to cart`}
            >
              <ShoppingCart size={15} strokeWidth={2.2} />
              Add
            </button>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={`/product/${id}`} className="flex items-center gap-3 group">
        <div className="w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={image_url}
            alt={name}
            className="max-h-full max-w-full object-contain
                       group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium text-gray-800 line-clamp-2
                        group-hover:text-[#E44B26] transition-colors leading-snug"
          >
            {name}
          </p>
          <StarRow rating={rating} count={review_count} />
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[#E44B26] font-bold text-sm">${price}</span>
            {old_price && (
              <span className="text-gray-400 text-xs line-through">
                ${old_price}
              </span>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-white rounded-2xl border border-gray-100
                 hover:shadow-lg transition-all duration-300 flex flex-col
                 overflow-visible relative"
    >
      {badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`${badge.bg} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}
          >
            {badge.label}
          </span>
        </div>
      )}

      {discountPct && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
            -{discountPct}%
          </span>
        </div>
      )}

      <div className="relative mx-3 mt-3">
        <div className="bg-[#F3F4F6] rounded-xl h-44 flex items-center justify-center overflow-hidden p-4">
          <img
            src={image_url}
            alt={name}
            className="max-h-full max-w-full object-contain
                       group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2
                     w-9 h-9 bg-white rounded-full border border-gray-200 shadow-sm
                     flex items-center justify-center
                     hover:bg-[#E44B26] hover:border-[#E44B26] hover:text-white
                     text-gray-400 transition-all duration-200 z-10"
          aria-label={`Добавить ${name} в корзину`}
        >
          <ShoppingCart size={15} />
        </button>
      </div>

      <div className="px-3 pt-7 pb-4 flex flex-col flex-1 text-center">
        {categoryName && (
          <p className="text-xs text-gray-400 mb-1">{categoryName}</p>
        )}

        <div className="flex items-center justify-center gap-1 mb-1">
          <StarRow rating={rating} count={review_count} />
        </div>

        <p
          className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2
                      group-hover:text-[#E44B26] transition-colors leading-snug flex-1"
        >
          {name}
        </p>

        <div className="flex items-center justify-center gap-2">
          <span className="text-[#E44B26] font-bold text-base">${price}</span>
          {old_price && (
            <span className="text-gray-400 text-sm line-through">
              ${old_price}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function StarRow({ rating = 0, count }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span
            key={s}
            className={`text-sm ${rating >= s ? "text-yellow-400" : "text-gray-200"}`}
          >
            ★
          </span>
        ))}
      </div>
      {count !== undefined && (
        <span className="text-gray-400 text-xs">({count})</span>
      )}
    </div>
  );
}
