import { Component } from "react";
import styled from "styled-components";

const CartDiv = styled.div`
  background-color: #fff;
  position: absolute;
  margin-top: 30px;
  border: 1px solid rgb(0, 0, 0, 0.4);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.4);
  width: 400px;
  right: 50px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "PT Serif", sans-serif;
  font-weight: bold;
  z-index: 1000;
`;

const Name = styled.p`
  text-align: left;
  width: 250px;
`;

const Img = styled.img`
  width: 50px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  border: 1px solid #eee;
`;

const NamePrice = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
`;

const Album = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #000;
`

class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <CartDiv>
        {cart.map((x) => (
          <Div>
            <Album>
              <Img alt={x.name} src={x.img} />
            </Album>
            <NamePrice>
              <Name>{x.name}</Name>
              <span>X{x.amount}</span>
            </NamePrice>
          </Div>
        ))}
      </CartDiv>
    );
  }
}

export default CartDetails;
