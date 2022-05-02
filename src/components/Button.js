import { Component } from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: var(--blue);
  border: 1px solid #fff;
  color: #eee;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Radio Canada", sans-serif;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  margin-left: auto;
  transition: 0.2s;

  &:hover {
    border: 1px solid var(--blue);
    color: var(--blue);
    background-color: #fff;
  }
`;

class Button extends Component {
  render() {
    return <Btn type="button" {...this.props} />;
  }
}

export default Button;
