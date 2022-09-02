import styled from "styled-components";

export const Main = styled.main`
  height: 85vh;
  width: 100vw;

  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ContainerMain = styled.div`
  align-items: center;
  padding: 2px;
  height: 90%;
  width: 80%;
  background: linear-gradient(
    100deg,
    rgba(211, 0, 0, 0.83),
    rgba(0, 0, 0, 0.25)
  );
  border-radius: 4px;

  .gradient {
    background-color: var(--color-grey-3);
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    border-radius: 4px;
  }

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

    border-right: 2px;
    border-style: solid;
    border-image: linear-gradient(
        to bottom,
        rgba(211, 0, 0, 0.83),
        rgba(0, 0, 0, 0.25)
      )
      1 100%;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;

  h2 {
    font-size: 2rem;
    border-bottom: 2px solid rgba(211, 0, 0, 0.3);
    border-style: solid;
    color: var(--color-white-0);
    margin: 0 auto;
    text-align: center;
    padding-bottom: 10px;
    width: 100px;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    img {
      display: none;
    }
  }
`;
