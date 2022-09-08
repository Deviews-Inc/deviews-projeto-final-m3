import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 68px;

  background-color: var(--color-black-0);
  box-shadow: var(--box-shadow);

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
      width: 50px;
    }

    .logoMobilePublic {
      width: 10.625rem;
    }

    .dropdown {
      position: relative;
      display: flex;
      justify-content: end;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--color-grey-2);
      min-width: 160px;
      margin-top: 320px;
      box-shadow: 0px 8px 16px 0px var(--box-shadow);
      z-index: 1;
      border-radius: 5px;

      a {
        color: var(--color-white-0);
      }
      li {
        margin: 10px;
        margin-top: 20px;
        padding: 12px 16px;
        border-radius: 4px;
      }

      li:hover {
        background: linear-gradient(
            to right,
            rgba(211, 0, 0, 0.83),
            rgba(0, 0, 0, 0.25)
          )
          left bottom transparent no-repeat;
        background-size: 80% 2px;
        transition: 500ms;
        background-color: var(--color-grey-1);
      }
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  }
`;
