import { useSelector } from "react-redux";
import "./Cart.css";
import EachCartItem from "./EachCartItem";
import { useEffect, useRef, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);

  const calculatePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      const numbers = item.price.split(/\D+/).map(parseFloat);
      total += numbers[1] * item.quantity;
    });
    setPrice(total);
  };
  useEffect(() => {
    calculatePrice();
  }, [cart]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="Cart-Section">
      <div className="cart-left">
        <div className="cart-left-top">Cart</div>
        <div className="cart-left-bottom">
            {cart.map((item) => {
                return <EachCartItem key={item.id} oncalculatePrice={calculatePrice} id={item.id} image={item.image} name={item.name} rating={item.rating} quantity={item.quantity} price={item.price} productObj={item}/>
            })}
        </div>
      </div>
      <div className="cart-right">
        <div className="cart-right-SubTotal">
          <div className="cart-right-SubTotal-Text">Subtotal</div>
          <div className="cart-right-SubTotal-Price">₹ {price}</div>
        </div>
        <div className="cart-right-Discount">
        <div className="cart-right-SubTotal-Text">Discount</div>
          <div className="cart-right-SubTotal-Price discont-price">25 %</div>
        </div>
        <div className="cart-right-GrandTotal">
        <div className="cart-right-SubTotal-Text">Grandtotal</div>
          <div className="cart-right-SubTotal-Price">₹ {price/4}</div>
        </div>
        <div className="cart-right-Total">Place Order</div>
      </div>
    </div>
  );
};

export default Cart;
