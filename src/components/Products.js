import { Component } from "react";
import Product from "./Product";
import styled from "styled-components";

const Section = styled.section`
  border-top: 2px solid #000;
  background: var(--beige);
  margin: 0 190px;
`;

const Div = styled.div`
  display: flex;
`;

const Albums = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 30px;
`;

const ProductsDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30fr);
  gap: 50px;
`;

const H1 = styled.h1`
  margin: 0;
  font-family: "Radio Canada", sans-serif;
  color: var(--blue);
`;

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <Section>
        <Div>
          <Albums>
            <H1>Albums</H1>
            <ProductsDiv>
              {products.map((product) => {
                return (
                  <Product
                    addToCart={addToCart}
                    key={product.name}
                    product={product}
                  />
                );
              })}
            </ProductsDiv>
          </Albums>
        </Div>
      </Section>
    );
  }
}

export default Products;
