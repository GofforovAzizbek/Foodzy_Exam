import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import useCartStore from "../../Store/cartStore";
import logo from "../../assets/icons/logo.svg";
import menu from "../../assets/icons/menu.svg";

const NAV_LINKS = [
  { label: "Home", to: "/", dropdown: false },
  { label: "Category", to: "/shop", dropdown: true },
  { label: "Products", to: "/Products", dropdown: true },
  { label: "Pages", to: "/shop", dropdown: true },
  { label: "Blog", to: "/blog", dropdown: true },
  { label: "Elements", to: "/Products", dropdown: true },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* ================= TOP ROW ================= */}
      <div className="border-b border-gray-100 relative z-40 py-[10px]">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <button className="hidden lg:block">
            <img src={menu} alt="" className="" />
          </button>
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center text-sm text-gray-600 hover:text-[#E44B26]"
              >
                {link.label}

                {link.label !== "Home" && (
                  <ChevronDown size={14} className="ml-1" />
                )}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+1234567890"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#E44B26]"
          >
            <Phone size={13} />
            +123 (456) (7890)
          </a>
        </div>
      </div>

      {/* ================= DESKTOP ROW ================= */}
      <div className="hidden lg:flex max-w-[1200px] mx-auto px-4 py-[15px] items-center gap-4 relative z-40">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Foodzy" />
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-xl flex">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for items..."
            className="flex-1 border px-4 py-2 rounded-l-md text-sm"
          />

          <select className="border-y px-3 text-sm bg-white">
            <option>All Categories</option>
          </select>

          <button className="bg-[#E44B26] text-white px-4 rounded-r-md">
            <Search size={16} />
          </button>
        </form>

        <div className="flex items-center gap-4 ml-auto">
          <button className="flex items-center gap-1.5 text-sm">
            <User size={18} />
            Account
          </button>

          <button className="flex items-center gap-1.5 text-sm">
            <Heart size={18} />
            Wishlist
          </button>

          <Link
            to="/cart"
            className="flex items-center gap-1.5 text-sm relative"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E44B26] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
            Cart
          </Link>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* sidebar */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-2xl rounded-r-2xl z-[10000]
          transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/">
              <img src={logo} alt="Foodzy" className="h-7" />
            </Link>

            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* content */}
          <div className="p-4 flex flex-col gap-5 overflow-y-auto h-full">
            {/* 🔥 MOBILE SEARCH + CATEGORY (FIXED) */}
            <form onSubmit={handleSearch} className="flex flex-col gap-2">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items..."
                className="border px-3 py-2 rounded-md text-sm"
              />

              <div className="flex gap-2">
                <select className="flex-1 border px-3 py-2 rounded-md text-sm bg-white">
                  <option>All Categories</option>
                </select>

                <button
                  type="submit"
                  className="bg-[#E44B26] text-white px-4 rounded-md flex items-center justify-center"
                >
                  <Search size={16} />
                </button>
              </div>
            </form>

            {/* icons */}
            <div className="flex flex-col gap-3 pt-[25px]">
              <button className="flex items-center gap-2">
                <User size={18} /> Account
              </button>

              <button className="flex items-center gap-2">
                <Heart size={18} /> Wishlist
              </button>

              <Link to="/cart" className="flex items-center gap-2">
                <ShoppingCart size={18} />
                Cart
              </Link>
            </div>

            {/* nav */}
            <nav className="flex flex-col border-t pt-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b text-gray-700 hover:text-[#E44B26]"
                >
                  <span>{link.label}</span>

                  {link.label !== "Home" && (
                    <ChevronDown size={16} className="opacity-70" />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
