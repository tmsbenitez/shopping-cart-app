import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";
import styled from "styled-components";

const Bubble = styled.span`
  position: relative;
  left: 12px;
  top: 20px;
`;

const CartBtn = styled.button`
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 10px 30px;
  margin-right: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    border: 2px solid #000;
    background-color: #fff;
    color: #000;
  }
`;

class Cart extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;
    const amount = cart.reduce((acc, el) => acc + el.amount, 0);
    return (
      <div>
        <Bubble>{amount !== 0 ? <BubbleAlert value={amount} /> : null}</Bubble>
        <CartBtn onClick={showCart}>
          <span class="material-symbols-outlined">shopping_cart</span>
        </CartBtn>
        {isCartVisible ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}

export default Cart;
