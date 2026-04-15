import { Link } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi2";
import QuantityControl from "@/components/common/QuantityControl";
import { formatCurrency } from "@/utils/format";

const CartTable = ({ items, onIncrease, onDecrease, onRemove }) => (
  <div className="space-y-6">
    <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-soft">
      <div className="hidden grid-cols-[1.8fr,1fr,1fr,1fr,80px] gap-4 bg-slate-50 px-6 py-4 font-semibold text-slate-700 md:grid">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Action</span>
      </div>
      <div className="divide-y divide-slate-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 px-6 py-5 md:grid-cols-[1.8fr,1fr,1fr,1fr,80px] md:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-2">
                <img src={item.image} alt={item.name} className="max-h-full object-contain" />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-slate-400">{item.category}</p>
              </div>
            </div>
            <p className="font-semibold text-slate-600">{formatCurrency(item.price)}</p>
            <QuantityControl
              value={item.quantity}
              onIncrease={() => onIncrease(item.id, item.quantity)}
              onDecrease={() => onDecrease(item.id, item.quantity)}
            />
            <p className="font-semibold text-slate-600">
              {formatCurrency(item.quantity * item.price)}
            </p>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-xl text-slate-400 transition hover:text-brand-primary"
            >
              <HiOutlineTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <Link to="/shop" className="text-sm font-semibold text-slate-500 underline">
        Continue Shopping
      </Link>
      <Link
        to="/checkout"
        className="inline-flex rounded-2xl bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-primary-dark"
      >
        Check Out
      </Link>
    </div>
  </div>
);

export default CartTable;
