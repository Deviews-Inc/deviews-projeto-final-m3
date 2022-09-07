import styled from "styled-components";

export const Main = styled.main`
  height: 85vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMain = styled.div`
  width: 90%;
  height: 90%;

  align-items: center;
  padding: 0.125rem;
  text-align: justify;

  border-radius: 0.25rem;
  background-color: var(--color-grey-3);
  color: var(--color-grey-0);

  .container_logo {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    margin: 20px 10px;

    h2 {
      padding-bottom: 0.625rem;

      font-size: 2rem;
      font-weight: 500;

      color: var(--color-white-0);
      background: linear-gradient(
          to right,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        left bottom var(--color-grey-3) no-repeat;
      background-size: 100% 1px;
    }

    img {
      width: 3.125rem;
    }
  }

  p{
    margin: 5px 10px;
    font-size: 14px;
    line-height: 1.5rem;
  }

  @media screen and (min-width: 425px) {
    width: 24.25rem;
    .container_logo{
      justify-content: center;
      h2{
        margin: 10px;
      }
      img{
        margin: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

