const QuantityControl = ({ value, onDecrease, onIncrease }) => (
  <div className="inline-flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
    <button
      type="button"
      onClick={onDecrease}
      className="px-3 py-2 text-lg text-slate-500 transition hover:bg-slate-100"
    >
      -
    </button>
    <span className="min-w-12 px-3 text-center text-sm font-semibold">{value}</span>
    <button
      type="button"
      onClick={onIncrease}
      className="px-3 py-2 text-lg text-slate-500 transition hover:bg-slate-100"
    >
      +
    </button>
  </div>
);

export default QuantityControl;
