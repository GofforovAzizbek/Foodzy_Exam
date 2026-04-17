import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import logo from "../../assets/icons/logo.svg";
import locationIcon from "../../assets/icons/footer-location-icon.svg";
import emailIcon from "../../assets/icons/footer-text-icon.svg";
import phoneIcon from "../../assets/icons/footer-phone-icon.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import ballonIcon from "../../assets/icons/ballon.svg";
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

const SOCIAL_LINKS = [
  { icon: facebookIcon, label: "Facebook", href: "#" },
  { icon: xIcon, label: "X (Twitter)", href: "#" },
  { icon: instagramIcon, label: "Instagram", href: "#" },
  { icon: ballonIcon, label: "Ballon", href: "#" },
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
      <div className="shell-header grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[440px_1fr_1fr_416px] gap-x-4 gap-y-10 py-14">
        {/* 1. Logo and Info - Width: 440px */}
        <div className="lg:w-[350px]">
          <Link to="/" className="mb-6 block">
            <img src={logo} alt="Foodzy" className="w-[130px]" />
          </Link>
          <p className="mb-6 text-[14px] leading-6 text-[#7E7E7E]">
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[14px] text-[#7E7E7E]">
              <img
                src={locationIcon}
                alt=""
                className="w-4 h-4 mt-1 flex-shrink-0"
              />
              <span>
                51 Green St. Huntington ohio beach ontario, NY 11746 KY 4783,
                USA.
              </span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-[#7E7E7E]">
              <img src={emailIcon} alt="" className="w-4 h-4 flex-shrink-0" />
              <span>example@email.com</span>
            </li>
            <li className="flex items-center gap-3 text-[14px] text-[#7E7E7E]">
              <img src={phoneIcon} alt="" className="w-4 h-4 flex-shrink-0" />
              <span>+91 123 4567890</span>
            </li>
          </ul>
        </div>

        {/* 2. Company Links */}
        <div className="">
          <h4 className="mb-7 text-[18px] font-bold text-[#253D4E]">Company</h4>
          <ul className="space-y-3">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[14px] text-[#7E7E7E] transition-colors hover:text-[#3BB77E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Category Links */}
        <div className="">
          <h4 className="mb-7 text-[18px] font-bold text-[#253D4E]">
            Category
          </h4>
          <ul className="space-y-3">
            {CATEGORY_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-[14px] text-[#7E7E7E] transition-colors hover:text-[#3BB77E]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter & Socials - Width: 416px */}
        <div className="w-full lg:w-[416px]">
          <h4 className="mb-7 text-[18px] font-bold text-[#253D4E]">
            Subscribe Our Newsletter
          </h4>

          <div className="mb-6 flex overflow-hidden rounded-md border border-[#ECECEC] bg-white">
            <input
              type="email"
              placeholder="Search here..."
              className="flex-1 px-4 py-3 text-[14px] focus:outline-none"
            />
            <button className="bg-[#3BB77E] px-5 text-white transition-colors hover:bg-[#29A56C]">
              <Send size={16} />
            </button>
          </div>

          {/* Social Icons Mapped */}
          <div className="mb-8 flex items-center gap-2">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-[#ECECEC] text-[#7E7E7E] transition-all hover:bg-[#3BB77E] hover:border-[#3BB77E] hover:text-white group"
              >
                <img
                  src={social.icon}
                  alt={social.label}
                  className="w-4 h-4 transition-all group-hover:brightness-0 group-hover:invert"
                />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-2">
            {GALLERY_IMGS.map((img, idx) => (
              <div
                key={idx}
                className="aspect-square overflow-hidden rounded-md border border-[#ECECEC] bg-white"
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#E9E9E9] py-7">
        <div className="shell-header text-center text-[14px] text-[#7E7E7E]">
          © {year}{" "}
          <Link to="/" className="font-semibold text-[#3BB77E] hover:underline">
            Foodzy
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
