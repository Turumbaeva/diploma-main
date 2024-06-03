import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";

export default function Cart() {
  return (
    <div className="Cart">
      <CartList />
      <OrderForm />
    </div>
  );
}