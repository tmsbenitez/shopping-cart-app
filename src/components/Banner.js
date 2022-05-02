import { Component } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 50%;
`;

const H1 = styled.h1`
  font-family: "Libre Bodoni", cursive;
  font-size: 50px;
  pointer-events: none;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 200px 0 200px;
`

class Banner extends Component {
  render() {
    return (
      <Div>
        <Img src="/img/john-banner.png" />
        <H1>John Frusciante Albums</H1>
      </Div>
    );
  }
}

export default Banner;
