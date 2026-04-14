import { Link } from "react-router-dom";
import heroBg from "@/assets/images/heroBg.png";
import arrowRight from "@/assets/icons/arrowRight.svg";

const HeroSection = () => (
  <section className="pt-0">
    <div className="app-container">
      <div className="relative min-h-[280px] overflow-hidden bg-[#22292f] sm:min-h-[420px] lg:min-h-[560px]">
        <img
          src={heroBg}
          alt="Foodzy hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,30,36,0.82)_0%,rgba(25,30,36,0.62)_28%,rgba(25,30,36,0.12)_56%,rgba(25,30,36,0.05)_100%)]" />
        <div className="relative z-10 flex min-h-[280px] items-center px-6 py-10 sm:min-h-[420px] sm:px-10 lg:min-h-[560px] lg:px-[90px]">
          <div className="max-w-[360px] text-white">
            <p className="mb-3 text-[18px] font-normal text-white/65 sm:mb-4">Super Delicious</p>
            <h1 className="max-w-[320px] text-[34px] font-extrabold uppercase leading-[1.1] tracking-[0.01em] sm:text-[52px]">
              The Best Way To Stuff Your Wallet.
            </h1>
            <p className="mt-3 text-sm text-white/70 sm:mt-4">Today&apos;s Best Deal</p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4a226] px-2 py-2 pr-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#df8f16]"
            >
              <img src={arrowRight} alt="" className="h-8 w-8" />
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
