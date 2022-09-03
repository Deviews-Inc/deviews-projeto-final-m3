import styled from "styled-components";

export const Main = styled.main`
  width: 90%;

  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 1.875rem auto;
  margin-top: 1.875rem;

  .gradient {
    width: 100%;
    background: linear-gradient(
      100deg,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    );
    border-radius: 0.25rem;
    padding: 0.125rem;
  }

  @media screen and (min-width: 425px) {
    width: 24.25rem;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;
