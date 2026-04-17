import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import logo from "../../assets/icons/logo.svg";
import locationIcon from "../../assets/icons/footer-location-icon.svg";
import emailIcon from "../../assets/icons/footer-text-icon.svg";
import phoneIcon from "../../assets/icons/footer-phone-icon.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import footerImg1 from "../../assets/icons/footer-image1.svg";
import footerImg2 from "../../assets/icons/footer-image2.svg";
import footerImg3 from "../../assets/icons/footer-image3.svg";
import footerImg4 from "../../assets/icons/footer-image4.svg";
import footerImg5 from "../../assets/icons/footer-image5.svg";

const COMPANY_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Delivery Information", to: "/delivery" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Contact Us", to: "/contact" },
  { label: "Support Center", to: "/support" },
];

const CATEGORY_LINKS = [
  { label: "Dairy & Bakery", to: "/shop?category=dairy-bakery" },
  { label: "Fruits & Vegetable", to: "/shop?category=fruits-vegetables" },
  { label: "Snack & Spice", to: "/shop?category=snack-spice" },
  { label: "Juice & Drinks", to: "/shop?category=juice-drinks" },
  { label: "Chicken & Meat", to: "/shop?category=chicken-meat" },
  { label: "Fast Food", to: "/shop?category=fast-food" },
];

const GALLERY_IMGS = [
  footerImg1,
  footerImg2,
  footerImg3,
  footerImg4,
  footerImg5,
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-[#E9E9E9] bg-[#F7F7F8]">
      <div className="shell-header grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-5 flex items-center gap-3">
            <img src={logo} alt="Foodzy" className="w-20" />
          </Link>

          <p className="mb-6 max-w-[320px] text-[16px] leading-8 text-gray-500">
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-[15px] leading-7 text-gray-500">
              <img
                src={locationIcon}
                alt=""
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              />
              51 Green St. Huntington ohio beach ontario, NY 11746 KY 4783, USA.
            </li>
            <li className="flex items-center gap-3 text-[15px] text-gray-500">
              <img src={emailIcon} alt="" className="w-4 h-4 flex-shrink-0" />
              example@email.com
            </li>
            <li className="flex items-center gap-3 text-[15px] text-gray-500">
              <img src={phoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
              +91 123 4567890
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[20px] font-semibold text-gray-900">
            Company
          </h4>
          <ul className="space-y-4">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[15px] text-gray-500 transition-colors hover:text-[#E44B26]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[20px] font-semibold text-gray-900">
            Category
          </h4>
          <ul className="space-y-4">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[15px] text-gray-500 transition-colors hover:text-[#E44B26]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-[20px] font-semibold text-gray-900">
            Subscribe Our Newsletter
          </h4>

          <div className="mb-6 flex">
            <input
              type="email"
              placeholder="Search here..."
              className="flex-1 border border-gray-200 rounded-l-md px-4 py-3 text-sm
                         focus:outline-none focus:border-[#E44B26] transition-colors"
            />
            <button
              className="rounded-r-md bg-white px-4 text-gray-900 transition-colors hover:text-[#E44B26]"
              aria-label="Subscribe"
            >
              <Send size={15} />
            </button>
          </div>

          <div className="mb-6 flex items-center gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:opacity-70 transition-opacity"
            >
              <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:opacity-70 transition-opacity"
            >
              <img src={xIcon} alt="X" className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 hover:opacity-70 transition-opacity"
            >
              <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {GALLERY_IMGS.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-md overflow-hidden bg-gray-50"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shell-header border-t border-[#E9E9E9]">
        <div className="shell-header py-5 text-center text-sm text-gray-400">
          © {year}{" "}
          <Link to="/" className="text-[#E44B26] hover:underline">
            Foodzy
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
