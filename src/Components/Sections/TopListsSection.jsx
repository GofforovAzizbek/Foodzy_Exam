import { Link } from "react-router-dom";
import StarRating from "../Ui/StarRating";
import {
  useTopSelling,
  useTrending,
  useRecentlyAdded,
  useTopRated,
} from "../../Hooks/useProducts";


const COLUMNS = [
  { key: "topSelling", label: "Top Selling" },
  { key: "trending", label: "Trending Products" },
  { key: "recentlyAdded", label: "Recently added" },
  { key: "topRated", label: "Top Rated" },
];

function RowSkeleton() {
  return (
    <div className="flex items-center gap-3 py-3 animate-pulse">
      <div className="w-14 h-14 bg-gray-100 rounded flex-shrink-0" />
      <div className="flex-1 space-y-1.5">
        <div className="h-3 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-100 rounded w-1/4" />
        <div className="h-3 bg-gray-100 rounded w-1/3" />
      </div>
    </div>
  );
}

function ProductRow({ product }) {
  if (!product) return null;
  const { id, name, price, old_price, image_url, rating } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="group flex items-center gap-4 py-3"
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[#F7F8FA]">
        <img
          src={image_url}
          alt={name}
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="line-clamp-2 text-[15px] font-medium leading-[1.25] text-[#253D4E]
                      transition-colors group-hover:text-[#E44B26]"
        >
          {name}
        </p>
        <div className="mt-1">
          <StarRating rating={rating} count={4.0} />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="text-[#3BB77E] font-bold text-[22px] leading-none">${price}</span>
          {old_price && (
            <span className="text-[#ADADAD] text-sm line-through">
              ${old_price}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function Column({ label, products = [], isLoading }) {
  return (
    <div>
      <div className="mb-5 border-b border-[#ECECEC] pb-4">
        <h3 className="text-[32px] font-bold leading-none text-[#253D4E]">{label}</h3>
        <div className="mt-4 h-[3px] w-16 rounded-full bg-[#3BB77E]" />
      </div>
      <div className="space-y-2">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <RowSkeleton key={i} />)
          : products.map((p) => <ProductRow key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default function TopListsSection() {
  const { data: topSelling = [], isLoading: l1 } = useTopSelling(3);
  const { data: trending = [], isLoading: l2 } = useTrending(3);
  const { data: recentlyAdded = [], isLoading: l3 } = useRecentlyAdded(3);
  const { data: topRated = [], isLoading: l4 } = useTopRated(3);

  const columnsData = [
    { key: "topSelling", label: "Top Selling", data: topSelling, loading: l1 },
    {
      key: "trending",
      label: "Trending Products",
      data: trending,
      loading: l2,
    },
    {
      key: "recentlyAdded",
      label: "Recently added",
      data: recentlyAdded,
      loading: l3,
    },
    { key: "topRated", label: "Top Rated", data: topRated, loading: l4 },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columnsData.map((col) => (
          <Column
            key={col.key}
            label={col.label}
            products={col.data}
            isLoading={col.loading}
          />
        ))}
      </div>
    </section>
  );
}
