import styled from "styled-components";

interface IButtonFireProps {
  liked?: boolean;
}

export const Icon = styled.button<IButtonFireProps>`
  background-color: transparent;
  border: none;
  z-index: 9;

  svg {
    color: ${(props) =>
      props.liked ? "var(--color-red-0)" : "var(--color-grey-0)"};
    transition: 0.5s;

    &:hover {
      color: var(--color-red-0);
    }
  }
`;
