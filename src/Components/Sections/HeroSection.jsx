import { useState } from "react";

// Rasmlar manzili
import heroDesktop from "../../assets/images/hero-main.png";
import heroMobile from "../../assets/images/hero-mobile.png";

const HERO_TAGS = ["Shopping", "Recipes", "Kitchen", "News", "Food"];

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [activeTag, setActiveTag] = useState("Shopping");

  function handleSubscribe(e) {
    e.preventDefault();
    setEmail("");
    alert("Subscribed!");
  }

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[862px] flex items-center overflow-hidden">
      {/* 👉 Desktop Background (Faqat 1920px+ uchun daxlsiz qoladi) */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-contain pointer-events-none hidden min-[1920px]:block"
        style={{
          backgroundImage: `url(${heroDesktop})`,
          backgroundPosition: "center center",
        }}
      />

      {/* 👉 Mobile & Tablet Background (1919px dan kichiklashsa ishga tushadi)
          'w-[50%] md:w-[45%]' orqali karamni kichraytirdik, 
          'opacity-100' va 'bg-right-bottom' bilan dizaynga mosladik.
      */}
      <div
        className="absolute right-0 bottom-0 z-0 pointer-events-none min-[1920px]:hidden transition-all duration-700 opacity-40 md:opacity-60 lg:opacity-100 w-[55%] md:w-[45%] h-full bg-no-repeat bg-contain bg-right-bottom"
        style={{
          backgroundImage: `url(${heroMobile})`,
        }}
      />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        {/* 👉 Layout: 'lg:items-baseline' desktopda elementlarni yuqori chiziq bo'yicha ushlaydi */}
        <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-8 py-10">
          {/* ── Chap taraf: Matn qismi ── */}
          <div className="max-w-full lg:max-w-[550px] order-2 lg:order-1">
            <div className="mb-6 md:mb-8">
              <p className="text-[#253D4E] font-bold text-sm md:text-base mb-3">
                <span className="text-[#E44B26] border-b-2 border-[#E44B26] mr-2 text-lg">
                  100%
                </span>
                Organic Vegetables
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#253D4E] leading-[1.1] mb-5">
                The best way to <br className="hidden sm:block" />
                stuff your wallet.
              </h1>

              <p className="text-gray-500 font-medium text-sm md:text-base max-w-[380px] leading-relaxed mb-8 md:mb-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet
                reiciendis beatae consequuntur.
              </p>
            </div>

            {/* ── Email Form ── */}
            <form
              onSubmit={handleSubscribe}
              className="flex items-center w-full max-w-[420px] bg-white rounded-full p-1 shadow-lg border border-gray-100"
            >
              <div className="pl-4 text-gray-400 hidden xs:block">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 py-2.5 md:py-3.5 px-3 text-xs md:text-sm bg-transparent focus:outline-none text-gray-700 w-full"
              />

              <button
                type="submit"
                className="bg-[#3BB77E] hover:bg-[#2ea06c] text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-xs md:text-sm font-bold transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* ── O'ng taraf: Taglar ── */}
          <div className="flex flex-wrap gap-2 md:gap-3 lg:pt-10 order-1 lg:order-2">
            {HERO_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`
                  px-4 py-2 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-[13px] font-semibold transition-all flex items-center shadow-md border
                  ${
                    activeTag === tag
                      ? "bg-white text-[#3BB77E] border-[#3BB77E]/20"
                      : "bg-white/95 text-gray-500 border-transparent hover:bg-white"
                  }
                `}
              >
                {activeTag === tag && (
                  <span className="mr-1.5 text-[#3BB77E] font-bold">×</span>
                )}
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
