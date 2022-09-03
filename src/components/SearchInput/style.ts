import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 25px;
  border: 1px solid var(--color-red-0);
  opacity: 0.8;
  border-radius: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border-radius: 50px;
    width: 80%;
    height: 90%;
  }

  button {
    background-color: transparent;
    border: none;
    height: 100%;

    svg {
      color: var(--color-red-0);
      width: 50px;
      height: 80%;
    }
  }
`;
