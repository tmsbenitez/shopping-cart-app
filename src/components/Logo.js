import { Component } from "react";
import styled from "styled-components";

const LogoDiv = styled.div`
  font-weight: 700;
  font-size: 2rem;
  font-family: "Tapestry", sans-serif;
  color: #000;
  margin-left: 20px;
  pointer-events: none;
  transition: 0.2s;
`;

class Logo extends Component {
  render() {
    return <LogoDiv id="logo">Rock&Shop</LogoDiv>;
  }
}

export default Logo;
