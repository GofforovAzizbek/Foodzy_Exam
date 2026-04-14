import { featureItems } from "@/constants/site";

const FeatureStrip = () => (
  <section className="py-8 sm:py-10">
    <div className="app-container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {featureItems.map((item) => (
        <div
          key={item.title}
          className="border border-[#ececec] bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-1"
        >
          <h3 className="text-[18px] font-semibold text-[#2b2b2d]">{item.title}</h3>
          <p className="mt-2 text-[14px] leading-6 text-[#7a7a7a]">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureStrip;
