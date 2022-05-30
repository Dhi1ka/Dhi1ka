import styled from "styled-components";
import { css } from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  border: none;
  border-radius: 50px;
  padding: 1em;
  width: 100%;
`;

export const Textarea = styled.textarea`
  border: none;
  border-radius: 50px;
  padding: 1em;
  width: 100%;
`;

export const DivContact = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1/3;
    `}
`;

export const Button = styled.button`
  background: #222222;
  border: 0;
  border-radius: 50px;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;
