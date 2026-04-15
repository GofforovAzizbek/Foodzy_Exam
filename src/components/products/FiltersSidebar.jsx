import { Checkbox, Label, RangeSlider } from "flowbite-react";
import { slugify } from "@/utils/format";

const colorOptions = ["Blue", "Yellow", "Red", "Green"];
const weightOptions = ["2kg Pack", "20kg Pack", "30kg Pack"];
const tagOptions = ["Vegetables", "Juice", "Food", "Dry Fruits"];

const FiltersSidebar = ({
  categories = [],
  activeCategory,
  setActiveCategory,
  priceRange,
  setPriceRange,
}) => (
  <aside className="space-y-6 rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
    <div>
      <h3 className="mb-4 text-xl font-bold">Product Category</h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
              activeCategory === category
                ? "bg-brand-primary text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>{category === "All" ? "All" : slugify(category)}</span>
            <span>{category === "All" ? "" : "+"}</span>
          </button>
        ))}
      </div>
    </div>
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Filter By Price</h3>
      <RangeSlider
        min={0}
        max={200}
        value={priceRange}
        onChange={(event) => setPriceRange(Number(event.target.value))}
      />
      <p className="font-semibold text-slate-700">Price: $20 - ${priceRange}</p>
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Product Category</h3>
      {colorOptions.map((color) => (
        <div key={color} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Checkbox />
            <Label>{color}</Label>
          </div>
          <span className="h-4 w-4 rounded bg-slate-200" />
        </div>
      ))}
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Weight</h3>
      {weightOptions.map((weight) => (
        <div key={weight} className="flex items-center gap-3">
          <Checkbox />
          <Label>{weight}</Label>
        </div>
      ))}
    </div>
    <div className="space-y-3">
      <h3 className="text-xl font-bold">Products Tags</h3>
      <div className="flex flex-wrap gap-2">
        {tagOptions.map((tag) => (
          <span key={tag} className="rounded-xl bg-slate-50 px-4 py-2 text-sm text-slate-500">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

export default FiltersSidebar;
