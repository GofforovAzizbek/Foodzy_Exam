import features1 from "../../assets/icons/features1.svg";
import features2 from "../../assets/icons/features2.svg";
import features3 from "../../assets/icons/features3.svg";
import features4 from "../../assets/icons/features4.svg";
import features5 from "../../assets/icons/features5.svg";

const FEATURES = [
  {
    icon: features1,
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
  },
  {
    icon: features2,
    title: "Free delivery",
    subtitle: "24/7 amazing services",
  },
  { icon: features3, title: "Great daily deal", subtitle: "When you sign up" },
  { icon: features4, title: "Wide assortment", subtitle: "Mega Discounts" },
  { icon: features5, title: "Easy returns", subtitle: "Within 30 days" },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-white py-2">
      <div className="max-w-[1200px] mx-auto px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 rounded-xl bg-[#F4F6FA] px-5 py-4 transition-transform hover:-translate-y-0.5"
            >
              <img
                src={f.icon}
                alt={f.title}
                className="h-11 w-11 flex-shrink-0"
              />
              <div>
                <p className="text-[18px] font-medium leading-tight text-[#253D4E]">
                  {f.title}
                </p>
                <p className="mt-1 text-sm text-[#ADADAD]">{f.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
