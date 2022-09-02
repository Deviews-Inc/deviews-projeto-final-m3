import styled from "styled-components";

export const HeaderComponent = styled.header`
  background-color: var(--color-black-0);
  width: 100%;
  height: 5.25rem;
  display: flex;
  justify-content: center;

  div {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
