import { HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePhone, HiPaperAirplane } from "react-icons/hi2";
import { Button, TextInput } from "flowbite-react";

const Footer = () => (
  <footer className="border-t border-slate-100 bg-slate-50 pt-20">
    <div className="app-container grid gap-12 pb-12 md:grid-cols-2 xl:grid-cols-4">
      <div className="space-y-5">
        <div>
          <p className="text-3xl font-black tracking-tight">Foodzy</p>
          <p className="mt-2 max-w-xs text-slate-500">
            FoodTrove is the biggest market of grocery products. Get your daily needs from our
            store.
          </p>
        </div>
        <div className="space-y-3 text-slate-500">
          <p className="flex items-start gap-3">
            <HiOutlineMapPin className="mt-1 text-brand-primary" />
            51 Green St. Huntington, Ontario, NY 11746, USA.
          </p>
          <p className="flex items-center gap-3">
            <HiOutlineEnvelope className="text-brand-primary" />
            example@email.com
          </p>
          <p className="flex items-center gap-3">
            <HiOutlinePhone className="text-brand-primary" />
            +91 123 4567890
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-5 text-2xl font-bold">Company</h3>
        <ul className="space-y-3 text-slate-500">
          <li>About Us</li>
          <li>Delivery Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact Us</li>
          <li>Support Center</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-5 text-2xl font-bold">Category</h3>
        <ul className="space-y-3 text-slate-500">
          <li>Dairy & Bakery</li>
          <li>Fruits & Vegetable</li>
          <li>Snack & Spice</li>
          <li>Juice & Drinks</li>
          <li>Chicken & Meat</li>
          <li>Fast Food</li>
        </ul>
      </div>
      <div className="space-y-5">
        <h3 className="text-2xl font-bold">Subscribe Our Newsletter</h3>
        <div className="flex items-center gap-3">
          <TextInput className="flex-1" placeholder="Search here..." />
          <Button color="failure" className="!bg-brand-primary hover:!bg-brand-primary-dark">
            <HiPaperAirplane />
          </Button>
        </div>
        <div className="flex gap-3">
          {["f", "x", "o", "i"].map((icon) => (
            <span
              key={icon}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm font-bold uppercase text-slate-500"
            >
              {icon}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl bg-gradient-to-br from-orange-200 via-rose-200 to-emerald-200"
            />
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
      <div className="app-container">
        &copy; 2025 <span className="font-semibold text-brand-primary">foodzy</span>. All rights
        reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
