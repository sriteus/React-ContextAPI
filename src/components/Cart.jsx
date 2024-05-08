import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  console.log(cart.items);
  const totalPrice = cart.items.reduce((accumulator, currentItem) => {
    return accumulator + parseFloat(currentItem.price);
  }, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.items.map((value, index) => {
        return (
          <li key={index}>
            {value.name}- ${value.price}
          </li>
        );
      })}
      <h5>Total Bill: ${totalPrice}</h5>
    </div>
  );
};

export default Cart;
