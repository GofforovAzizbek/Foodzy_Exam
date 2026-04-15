import { Link } from "react-router-dom";
import cart1 from "@/assets/images/cart1.png";
import cart2 from "@/assets/images/cart2.png";

const categoryItems = [
  "Cake & Milk",
  "Fresh Meat",
  "Vegetables",
  "Apple & Mango",
  "Strawberry",
];

const promoCards = [
  {
    title: "Cake",
    discount: "50",
    image: cart1,
  },
  {
    title: "Milk",
    discount: "40",
    image: cart2,
  },
];

const PromoGrid = () => (
  <section className="py-6 sm:py-8">
    <div className="app-container grid gap-4 lg:grid-cols-[261px,1fr,1fr]">
      <div className="border border-[#f0f0f0] bg-white">
        {categoryItems.map((item, index) => (
          <div
            key={item}
            className={`flex min-h-[62px] items-center justify-center border-b border-[#f0f0f0] px-4 text-center text-[13px] text-[#2b2b2d] ${
              index === 0 ? "text-[#f53e32]" : ""
            }`}
          >
            {item}
          </div>
        ))}
        <div className="flex min-h-[54px] items-center justify-center px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f53e32]">
          <Link to="/shop">View More</Link>
        </div>
      </div>

      {promoCards.map((card) => (
        <article key={card.title} className="group relative min-h-[320px] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.2))]" />
          <div className="absolute left-5 top-4 z-10 text-white">
            <div className="flex items-start gap-1">
              <span className="text-[46px] font-extrabold leading-none">{card.discount}</span>
              <div className="pt-1 text-left leading-none">
                <span className="block text-sm">%</span>
                <span className="block text-[17px]">OFF</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 z-10 flex w-full max-w-[150px] -translate-x-1/2 flex-col items-center gap-3 text-white">
            <h3 className="text-[20px] font-semibold">{card.title}</h3>
            <Link
              to="/shop"
              className="inline-flex rounded-[4px] bg-[#f53e32] px-4 py-[7px] text-[12px] font-medium text-white transition hover:bg-[#db352a]"
            >
              Shop Now
            </Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default PromoGrid;
