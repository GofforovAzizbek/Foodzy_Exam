const SectionHeading = ({ eyebrow, title, description, align = "center" }) => (
  <div className={`space-y-3 ${align === "center" ? "text-center" : "text-left"}`}>
    {eyebrow ? (
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        {description}
      </p>
    ) : null}
  </div>
);

export default SectionHeading;
