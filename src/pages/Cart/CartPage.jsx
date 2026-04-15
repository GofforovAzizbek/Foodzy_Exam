import { useDispatch, useSelector } from "react-redux";
import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";
import CartTable from "@/components/cart/CartTable";
import { addToCart, removeFromCart, selectCartItems, updateQuantity } from "@/features/cart/cartSlice";
import { useFeaturedProductsQuery } from "@/services/catalogQueries";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const { data: products = [], isLoading } = useFeaturedProductsQuery();

  return (
    <>
      <PageHero title="Cart" />
      <section className="py-16">
        <div className="app-container space-y-16">
          <CartTable
            items={items}
            onIncrease={(id, quantity) => dispatch(updateQuantity({ id, quantity: quantity + 1 }))}
            onDecrease={(id, quantity) => dispatch(updateQuantity({ id, quantity: Math.max(1, quantity - 1) }))}
            onRemove={(id) => dispatch(removeFromCart(id))}
          />
          <div className="space-y-10">
            <SectionHeading
              title="Popular Products"
              description="A continuation shelf below the cart mirrors the original page composition."
            />
            <ProductGrid
              products={products.slice(0, 4)}
              loading={isLoading}
              onAddToCart={(product) => dispatch(addToCart(product))}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
