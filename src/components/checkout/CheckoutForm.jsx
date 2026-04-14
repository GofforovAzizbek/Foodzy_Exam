import { Button, Label, Radio, Select, TextInput, Textarea } from "flowbite-react";
import { formatCurrency } from "@/utils/format";

const paymentLogos = ["VISA", "MC", "PayPal", "Skrill", "MAE", "Electron"];

const CheckoutForm = ({ items, subtotal }) => (
  <div className="grid gap-6 xl:grid-cols-[340px,1fr]">
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="mb-5 text-3xl font-bold">Summary</h3>
        <div className="space-y-3 text-slate-500">
          <div className="flex justify-between">
            <span>Sub-Total</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>{formatCurrency(subtotal > 100 ? 0 : 8)}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-slate-100 pt-4 text-xl font-bold text-slate-900">
            <span>Total Amount</span>
            <span>{formatCurrency(subtotal > 100 ? subtotal : subtotal + 8)}</span>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {items.slice(0, 2).map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-2">
                <img src={item.image} alt={item.name} className="max-h-full object-contain" />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-emerald-500">{formatCurrency(item.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="mb-5 text-3xl font-bold">Delivery Method</h3>
        <p className="mb-4 text-slate-500">
          Please select the preferred shipping method to use on this order.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Label className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4">
            <Radio defaultChecked name="delivery" />
            <span>Free Shipping</span>
          </Label>
          <Label className="flex items-center gap-3 rounded-2xl border border-slate-100 p-4">
            <Radio name="delivery" />
            <span>Flat Rate - $5</span>
          </Label>
        </div>
        <div className="mt-4">
          <Label htmlFor="orderComment" value="Add Comments About Your Order" />
          <Textarea id="orderComment" rows={4} className="mt-2" />
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="mb-5 text-3xl font-bold">Payment Method</h3>
        <div className="space-y-3">
          {["Cash On Delivery", "UPI", "Bank Transfer"].map((method, index) => (
            <Label key={method} className="flex items-center gap-3">
              <Radio name="payment" defaultChecked={index === 0} />
              <span>{method}</span>
            </Label>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="mb-5 text-3xl font-bold">Payment Method</h3>
        <div className="flex flex-wrap gap-2">
          {paymentLogos.map((logo) => (
            <span key={logo} className="rounded-xl border border-slate-100 px-3 py-2 text-sm font-semibold">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="space-y-6">
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="text-4xl font-black leading-none">New Customer</h3>
        <p className="mt-5 text-sm font-semibold text-slate-600">Checkout Options</p>
        <div className="mt-3 flex flex-wrap gap-6">
          <Label className="flex items-center gap-3">
            <Radio defaultChecked name="account" />
            <span>Register Account</span>
          </Label>
          <Label className="flex items-center gap-3">
            <Radio name="account" />
            <span>Guest Account</span>
          </Label>
        </div>
        <p className="mt-4 max-w-2xl text-slate-500">
          By creating an account you will be able to shop faster, be up to date on an order&apos;s
          status, and keep track of the orders you have previously made.
        </p>
        <Button color="failure" className="mt-6 !bg-brand-primary hover:!bg-brand-primary-dark">
          Continue
        </Button>

        <h3 className="mt-10 text-3xl font-bold">Returning Customer</h3>
        <div className="mt-5 grid gap-4">
          <div>
            <Label htmlFor="emailAddress" value="Email Address" />
            <TextInput id="emailAddress" className="mt-2" placeholder="Enter your email address" />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput id="password" type="password" className="mt-2" placeholder="Enter your password" />
          </div>
          <div className="flex items-center gap-5">
            <Button color="failure" className="!bg-brand-primary hover:!bg-brand-primary-dark">
              Login
            </Button>
            <button type="button" className="font-semibold text-slate-700 underline">
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
      <div className="rounded-[28px] border border-slate-100 bg-white p-6 shadow-soft">
        <h3 className="mb-6 text-3xl font-bold">Billing Details</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2 flex flex-wrap gap-6">
            <Label className="flex items-center gap-3">
              <Radio name="billingAddress" />
              <span>I want to use an existing address</span>
            </Label>
            <Label className="flex items-center gap-3">
              <Radio name="billingAddress" defaultChecked />
              <span>I want to use new address</span>
            </Label>
          </div>
          <div>
            <Label htmlFor="firstName" value="First Name*" />
            <TextInput id="firstName" className="mt-2" placeholder="Enter your first name" />
          </div>
          <div>
            <Label htmlFor="lastName" value="Last Name*" />
            <TextInput id="lastName" className="mt-2" placeholder="Enter your last name" />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="address" value="Address" />
            <TextInput id="address" className="mt-2" placeholder="Address line 1" />
          </div>
          <div>
            <Label htmlFor="city" value="City*" />
            <Select id="city" className="mt-2">
              <option>City</option>
              <option>Tashkent</option>
              <option>Samarkand</option>
              <option>Namangan</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="postcode" value="Post Code" />
            <TextInput id="postcode" className="mt-2" placeholder="Post Code" />
          </div>
          <div>
            <Label htmlFor="country" value="Country*" />
            <Select id="country" className="mt-2">
              <option>Country</option>
              <option>Uzbekistan</option>
              <option>United States</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="region" value="Region State" />
            <Select id="region" className="mt-2">
              <option>Region/State</option>
              <option>Tashkent</option>
              <option>Samarkand</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button color="failure" className="!bg-brand-primary px-8 hover:!bg-brand-primary-dark">
          Place Order
        </Button>
      </div>
    </div>
  </div>
);

export default CheckoutForm;
