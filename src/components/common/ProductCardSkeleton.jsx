const ProductCardSkeleton = () => (
  <div className="space-y-4 rounded-[28px] border border-slate-100 bg-white p-5 shadow-soft">
    <div className="h-52 animate-pulse rounded-[24px] bg-slate-100" />
    <div className="space-y-2">
      <div className="h-3 w-20 animate-pulse rounded bg-slate-100" />
      <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
      <div className="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
      <div className="h-5 w-24 animate-pulse rounded bg-slate-100" />
    </div>
  </div>
);

export default ProductCardSkeleton;
