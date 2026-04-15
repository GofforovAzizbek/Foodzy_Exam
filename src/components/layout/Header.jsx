import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Dropdown, TextInput } from "flowbite-react";
import { HiBars3BottomLeft, HiMagnifyingGlass, HiOutlineHeart, HiOutlinePhone, HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "@/features/cart/cartSlice";
import { setCategory, setSearchTerm, toggleMobileMenu } from "@/features/ui/uiSlice";
import { navLinks } from "@/constants/site";
import { useCategoriesQuery } from "@/services/catalogQueries";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount);
  const { data: categories = [] } = useCategoriesQuery();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categoryLabel = useMemo(
    () => (categoryFilter === "All" ? "All Categories" : categoryFilter),
    [categoryFilter],
  );

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(search));
    dispatch(setCategory(categoryFilter));
    navigate("/shop");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="border-b border-slate-100 py-3">
        <div className="app-container hidden items-center justify-between text-sm text-slate-500 lg:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `font-medium transition ${isActive ? "text-slate-900" : "hover:text-brand-primary"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <HiOutlinePhone className="text-brand-primary" />
            <span>+123 (456) (7890)</span>
          </div>
        </div>
      </div>
      <div className="app-container flex flex-wrap items-center gap-4 py-5">
        <button
          type="button"
          onClick={() => dispatch(toggleMobileMenu())}
          className="rounded-xl border border-slate-200 p-3 text-xl lg:hidden"
        >
          <HiBars3BottomLeft />
        </button>
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-orange-300 text-2xl shadow-soft">
            <span>F</span>
          </div>
          <div>
            <p className="text-3xl font-black tracking-tight">Foodzy</p>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              A Treasure of Tastes
            </p>
          </div>
        </Link>
        <form onSubmit={handleSearch} className="flex-1">
          <div className="hidden items-center overflow-hidden rounded-2xl border border-emerald-300 bg-white lg:flex">
            <TextInput
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for items..."
              className="w-full border-0 [&_input]:border-0 [&_input]:py-4 [&_input]:shadow-none"
            />
            <Dropdown inline label={categoryLabel} className="min-w-56">
              {categories.map((item) => (
                <Dropdown.Item key={item} onClick={() => setCategoryFilter(item)}>
                  {item === "All" ? "All Categories" : item}
                </Dropdown.Item>
              ))}
            </Dropdown>
            <Button color="failure" className="h-full rounded-none !bg-brand-primary px-5 hover:!bg-brand-primary-dark" type="submit">
              <HiMagnifyingGlass className="text-xl" />
            </Button>
          </div>
        </form>
        <div className="ml-auto flex items-center gap-5 text-sm font-semibold text-slate-700">
          <Link to="/login" className="hidden items-center gap-2 lg:flex">
            <HiOutlineUser className="text-xl" /> Account
          </Link>
          <Link to="/shop" className="hidden items-center gap-2 lg:flex">
            <HiOutlineHeart className="text-xl" /> Wishlist
          </Link>
          <Link to="/cart" className="relative flex items-center gap-2">
            <HiOutlineShoppingBag className="text-xl" /> Cart
            {cartCount > 0 ? (
              <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-primary px-1 text-[10px] text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
