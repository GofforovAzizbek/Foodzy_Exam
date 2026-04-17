import { Link } from "react-router-dom";
import banner1 from "../../assets/images/HomeCategory1.png";
import banner2 from "../../assets/images/HomeCategory2.png";
import banner3 from "../../assets/images/HomeCategory3.png";

const BANNERS = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    image: banner1,
    to: "/shop?category=vegetables",
    bg: "#F0E8D5",
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    image: banner2,
    to: "/shop?category=dairy-bakery",
    bg: "#F3E8E8",
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    image: banner3,
    to: "/shop?category=organic",
    bg: "#E7EAF3",
  },
];

export default function BannerSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="group relative min-h-[220px] flex items-center overflow-hidden rounded-[15px] p-8 transition-shadow hover:shadow-lg"
            style={{ backgroundColor: banner.bg }}
          >
            <div className="relative z-20 w-[60%]">
              <h3 className="mb-6 text-[20px] font-bold leading-[1.2] text-[#253D4E]">
                {banner.title}
              </h3>
              <Link
                to={banner.to}
                className="inline-flex h-[32px] items-center rounded-[4px] bg-[#F53E32] px-4 text-[12px] font-bold text-white transition-all hover:bg-[#3BB77E]"
              >
                Shop Now <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="absolute bottom-0 right-0 z-10 w-[70%] h-full flex items-end justify-end pointer-events-none">
              <img
                src={banner.image}
                alt={banner.title}
                className="max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-110 origin-bottom-right"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
