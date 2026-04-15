import { Link } from "react-router-dom";

const PageHero = ({ title }) => (
  <section className="bg-brand-primary py-8 text-white">
    <div className="app-container flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="text-sm text-white/85">
        <Link to="/" className="transition hover:text-white">
          Home
        </Link>{" "}
        <span className="mx-2">-</span>
        <span>{title}</span>
      </p>
    </div>
  </section>
);

export default PageHero;
