import cart2 from "@/assets/images/cart2.png";

const CountdownBanner = () => (
  <section className="py-8 sm:py-10">
    <div className="app-container">
      <div className="relative overflow-hidden">
        <img src={cart2} alt="Deal banner" className="h-[340px] w-full object-cover sm:h-[420px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.18)_55%,rgba(0,0,0,0.1)_100%)]" />
        <div className="absolute left-5 top-5 w-[290px] bg-white p-5 sm:left-8 sm:top-8 sm:w-[360px] sm:p-7">
          <p className="text-[14px] font-semibold text-[#f53e32]">35% OFF</p>
          <h3 className="mt-1 text-[28px] font-bold leading-[1.2] text-[#2b2b2d] sm:text-[34px]">
            Great deal on organic food.
          </h3>
          <p className="mt-3 text-[14px] leading-6 text-[#7a7a7a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <div className="mt-5 grid grid-cols-4 gap-2 text-center">
            {[
              ["326", "Day"],
              ["03", "Hrs"],
              ["06", "Min"],
              ["52", "Sec"],
            ].map(([value, label]) => (
              <div key={label} className="border border-[#ececec] px-2 py-3">
                <div className="text-[20px] font-bold text-[#2b2b2d]">{value}</div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#7a7a7a]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CountdownBanner;
