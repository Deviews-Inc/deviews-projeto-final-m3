import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;

  align-items: center;
  display: flex;
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 32.625rem;
  margin: 0 auto;

  background-color: var(--color-grey-3);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    flex-direction: inherit;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

export const ContainerLeft = styled.div`
  display: none;

  p {
    color: var(--color-white-0);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 90%;

    border-right: 2px solid var(--color-grey-1);
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;

    img {
      display: none;
    }
  }
`;
