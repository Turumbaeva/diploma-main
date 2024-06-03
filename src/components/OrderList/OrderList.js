import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return <div className="OrderList">No orders found.</div>;
  }

  const output = orders.map((order) => {
    const cartOutput = Object.keys(order.cart).map((productId) => {
      const product = products.find((product) => product.id === productId);

      if (!product) {
        return <div key={productId}>Product not found.</div>;
      }

      return (
        <div key={productId} className="item">
          <span className="name">{product.name}:</span>
          <span className="quantity">
            {order.cart[productId]} X {product.price} $ ={" "}
            {order.cart[productId] * product.price} $
          </span>
        </div>
      );
    });

    return (
      <div key={order.id} className="Order">
        <h2>Name: {order.name}</h2>
        <div className="details">
          <div>
            <span className="label">Phone:</span>
            <span className="value">{order.phone}</span>
          </div>
          <div>
            <span className="label">Address:</span>
            <span className="value">{order.address}</span>
          </div>
        </div>
        <div className="cart">{cartOutput}</div>
      </div>
    );
  });

  return <div className="OrderList">
    {output}
  </div>;
}
