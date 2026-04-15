const testimonials = [
  {
    name: "Stephen Smith",
    role: "Customer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Lorem Robhoson",
    role: "Customer",
    quote:
      "Mauris consequat erat nec neque laoreet, at consequat magna vulputate sed do eiusmod tempor.",
  },
  {
    name: "Baddiee Aland",
    role: "Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
];

const TestimonialSection = () => (
  <section className="py-10 sm:py-14">
    <div className="app-container">
      <div className="mb-8 text-center">
        <h2 className="text-[28px] font-bold text-[#2b2b2d] sm:text-[34px]">Great Words From People</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#7a7a7a]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <article key={item.name} className="border border-[#ededed] bg-[#fafafa] px-7 py-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f3d2b8] text-[18px] font-semibold text-[#2b2b2d]">
              {index + 1}
            </div>
            <p className="text-[14px] leading-7 text-[#7a7a7a]">{item.quote}</p>
            <h3 className="mt-5 text-[18px] font-semibold text-[#2b2b2d]">{item.name}</h3>
            <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-[#a0a0a0]">{item.role}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
