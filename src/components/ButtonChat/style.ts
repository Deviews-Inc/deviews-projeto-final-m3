import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;

  svg {
    color: var(--color-grey-1);
  }

  svg:hover {
    color: var(--color-grey-0);
    transition: 100ms linear;
  }
`;
