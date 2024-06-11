import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";
import Total from "../components/Total/Total";

export default function Cart() {
  return (
    <div className="Cart">
      <CartList />
      <OrderForm />
      <Total/>
      
    </div>
  );
}