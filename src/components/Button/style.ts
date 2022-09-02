import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: linear-gradient(var(--button-grad-red));
  color: var(--color-white-0);
  box-shadow: var(--box-shadow);

  width: 100%;
  height: 3rem;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 600;

  @media screen and (min-width: 425px) {
    width: 18.188rem;
  }
`;
