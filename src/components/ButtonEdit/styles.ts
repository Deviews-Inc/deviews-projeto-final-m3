import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: linear-gradient(var(--button-grad-red));
  color: var(--color-white-0);
  box-shadow: var(--box-shadow);

  width: fit-content;
  min-height: 1.875rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0rem 0.625rem;
  border-radius: 0.25rem;

  font-size: 1rem;

  svg {
    width: 90%;
    height: 80%;
  }

  &:hover {
    background-color: rgba(211, 0, 0, 0.83);
  }
`;
