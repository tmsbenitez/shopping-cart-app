import { Component } from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  position: fixed;
`;

class Navbar extends Component {
  render() {
    const { cart, isCartVisible, showCart } = this.props;
    return (
      <Nav>
        <Logo />
        <Cart cart={cart} isCartVisible={isCartVisible} showCart={showCart} />
      </Nav>
    );
  }
}

export default Navbar;
