import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onRemoveClick(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter(product => productIds.includes(product.id))
    .map(product => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={`/products/` + product.slug}> {product.name}</Link>
        <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange
            (product, +event.target.value)} />
        <span>{cart[product.id] * product.price} $</span>
        <button
          onClick={() => onRemoveClick(product)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    ));



  return (
    <div className="CartList">
      <h1>Cart</h1>
      {output}
    </div>
  )
}