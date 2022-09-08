import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;

  svg {
    color: var(--color-grey-0);
    transition: 0.5s;
  }

  svg:hover {
    color: var(--color-white-0);
  }
`;
