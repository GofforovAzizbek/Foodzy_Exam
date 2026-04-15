import { useSelector } from "react-redux";
import PageHero from "@/components/common/PageHero";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { selectCartItems, selectCartSubtotal } from "@/features/cart/cartSlice";

const CheckoutPage = () => {
  const items = useSelector(selectCartItems);
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <>
      <PageHero title="Checkout" />
      <section className="py-16">
        <div className="app-container">
          <CheckoutForm items={items} subtotal={subtotal} />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
