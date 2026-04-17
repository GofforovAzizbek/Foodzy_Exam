import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../../Store/cartStore";

export default function ProductCard({ product }) {
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

  const categoryName = categories?.name ?? "Snack";

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }

  // Ranglar va Badge-lar rasmga muvofiq
  function getBadge() {
    if (is_new) return { label: "New", bg: "bg-[#3BB77E]" };
    if (is_sale) return { label: "Sale", bg: "bg-[#67bcee]" };
    if (is_featured) return { label: "Hot", bg: "bg-[#f74b81]" };
    return null;
  }
  const badge = getBadge();

  return (
    <Link
      to={`/product/${id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[15px] border border-[#ececec] bg-white 
                 p-4 md:p-5 transition-all duration-300 hover:border-[#BCE3C9] hover:shadow-[20px_20px_40px_rgba(0,0,0,0.07)]"
    >
      {/* Badge - Dizayndagi kabi chap burchakda */}
      {badge && (
        <div className="absolute left-0 top-0 z-10">
          <span
            className={`${badge.bg} inline-flex items-center justify-center rounded-br-[15px] px-4 py-1.5 text-[12px] font-medium text-white`}
          >
            {badge.label}
          </span>
        </div>
      )}

      {/* Mahsulot rasmi - Kattaroq va markazda */}
      <div className="mb-4 flex h-[200px] md:h-[180px] items-center justify-center overflow-hidden">
        <img
          src={image_url}
          alt={name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col items-start text-left">
        {/* Kategoriya - Och rangda */}
        <span className="mb-1 text-[12px] text-[#adadad] font-normal">
          {categoryName}
        </span>

        {/* Mahsulot nomi - To'q ko'k rang (#253D4E) */}
        <h3 className="mb-2 line-clamp-2 min-h-[48px] text-[16px] font-bold leading-tight text-[#253D4E] transition-colors group-hover:text-[#3BB77E]">
          {name}
        </h3>

        {/* Reyting va Brend */}
        <div className="mb-3 flex w-full flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="flex text-[#FDC040] text-[12px]">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s}>{rating >= s ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="text-[12px] text-[#adadad]">
              ({review_count || 0})
            </span>
          </div>
          <p className="text-[13px] text-[#adadad]">
            By <span className="text-[#3BB77E]">{brand || "NestFood"}</span>
          </p>
        </div>

        {/* Narx va Tugma - Yashil rang (#3BB77E) */}
        <div className="mt-auto flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[18px] font-bold text-[#3BB77E]">
              ${price}
            </span>
            {old_price && (
              <span className="text-[14px] text-[#adadad] line-through decoration-1">
                ${old_price}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-[4px] bg-[#F53E32] px-4 py-[6px] text-[14px] font-bold text-[#ffffff] transition-all duration-300 hover:bg-[#3BB77E] hover:text-white"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
