import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 5.25rem;

  background-color: var(--color-black-0);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    height: 100%;

    figure {
      width: 12.5rem;

      img {
        width: 100%;
      }
    }
    .logoMobile {
      width: 3.75rem;
    }
  }
`;
