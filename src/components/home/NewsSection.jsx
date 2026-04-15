import cart1 from "@/assets/images/cart1.png";
import cart2 from "@/assets/images/cart2.png";
import heroBg from "@/assets/images/heroBg.png";

const posts = [
  {
    meta: "By Admin | Foods",
    title: "Urna cras enim elit mauris cursus sit volutpat.",
    image: cart2,
    date: "10",
    month: "oct",
  },
  {
    meta: "By Admin | Food",
    title: "Best guide to shopping for organic ingredients.",
    image: cart1,
    date: "09",
    month: "sep",
  },
  {
    meta: "By Admin | Diet",
    title: "Cursus orci vestibulum urna pretium elit mauris.",
    image: heroBg,
    date: "12",
    month: "oct",
  },
];

const NewsSection = () => (
  <section className="py-10 sm:py-14">
    <div className="app-container">
      <div className="mb-8 text-center">
        <h2 className="text-[28px] font-bold text-[#2b2b2d] sm:text-[34px]">Latest News</h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#7a7a7a]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title}>
            <p className="text-[12px] uppercase tracking-[0.14em] text-[#9b9b9b]">{post.meta}</p>
            <h3 className="mt-2 min-h-[56px] text-[20px] font-semibold leading-[1.45] text-[#2b2b2d]">
              {post.title}
            </h3>
            <div className="relative mt-4 overflow-hidden">
              <img src={post.image} alt={post.title} className="h-[240px] w-full object-cover" />
              <div className="absolute bottom-4 right-4 bg-[#2b2b2d] px-3 py-2 text-center text-white">
                <div className="text-[20px] font-bold leading-none">{post.date}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/70">
                  {post.month}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;
