import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi2";
import RatingStars from "@/components/common/RatingStars";
import { formatCurrency } from "@/utils/format";

const ProductCard = ({ product, onAddToCart }) => (
  <article className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
    <span className="absolute left-5 top-5 rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white">
      {product.badge}
    </span>
    <button
      type="button"
      className="absolute right-5 top-5 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:border-brand-primary hover:text-brand-primary"
    >
      <HiOutlineHeart className="text-lg" />
    </button>
    <Link
      to={`/products/${product.id}`}
      className="flex h-56 items-center justify-center rounded-[24px] bg-slate-50 p-4"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-full object-contain transition duration-300 group-hover:scale-105"
      />
    </Link>
    <div className="space-y-3 px-1 pt-5">
      <p className="text-sm text-slate-400">{product.category}</p>
      <Link
        to={`/products/${product.id}`}
        className="block text-lg font-bold leading-7 text-slate-900 transition hover:text-brand-primary"
      >
        {product.name}
      </Link>
      <RatingStars rating={product.rating} />
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-xl font-extrabold text-brand-primary">{formatCurrency(product.price)}</p>
          <p className="text-sm text-slate-400 line-through">
            {formatCurrency(product.originalPrice)}
          </p>
        </div>
        <Button
          color="failure"
          pill
          className="!bg-brand-primary hover:!bg-brand-primary-dark"
          onClick={() => onAddToCart(product)}
        >
          <HiOutlineShoppingBag className="mr-2 text-lg" />
          Add
        </Button>
      </div>
    </div>
  </article>
);

export default ProductCard;
