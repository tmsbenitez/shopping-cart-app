import { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

const ProductDiv = styled.div`
  box-shadow: 0 0 10px #ccc;
  border: 1px solid var(--blue);
  background-color: #fff;
  border-radius: 15px;
  transition: 0.3s;
  padding: 10px 15px;
  width: 350px;
  color: var(--blue);

  &:hover {
  }
`;

const Img = styled.img`
  width: 100%;
`;

const H3 = styled.h3`
  font-family: "Radio Canada", sans-serif;
  font-weight: 700;
  text-align: center;
`;

const P = styled.p`
  font-family: "Radio Canada", sans-serif;
  font-weight: 600;
`;


class Product extends Component {
  render() {
    const { product, addToCart } = this.props;

    return (
      <ProductDiv>
        <div>
          <Img alt={product.name} src={product.img} />
        </div>
        <H3>{product.name}</H3>
        <P>Year of release: {product.year}</P>
        <P>$ {product.price}</P>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </ProductDiv>
    );
  }
}

export default Product;
