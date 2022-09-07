import styled from "styled-components";

interface IButtonFireProps {
  liked?: boolean;
}

export const Icon = styled.button<IButtonFireProps>`
  background-color: transparent;
  border: none;

  svg {
    color: ${(props) =>
      props.liked ? "rgba(203, 0, 0, 1)" : "rgba(96,96,96,1)"};
  }
`;
