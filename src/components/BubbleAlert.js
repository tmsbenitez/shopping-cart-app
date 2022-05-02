import { Component } from "react";
import styled from "styled-components";

const Bubble = styled.span`
  background-color: rgb(56, 56, 56);
  border-radius: 15px;
  color: #fff;
  padding: 2px 10px;
  font-size: 0.9rem;
  font-family: "Radio Canada", sans-serif;
  width: 20px;
  pointer-events: none;
`;

class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return "";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return <Bubble>{this.getNumber(value)}</Bubble>;
  }
}

export default BubbleAlert;
