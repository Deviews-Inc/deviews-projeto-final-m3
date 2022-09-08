import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 68px;

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

      button {
        background-color: transparent;
        transition: 0.5s;

        svg {
          color: var(--color-grey-0);

          &:hover {
            color: var(--color-white-0);
          }
        }
      }
    }

    .dropdown-content {
      position: absolute;
      background-color: var(--color-grey-2);
      min-width: 160px;
      margin-top: 320px;
      box-shadow: 0px 8px 16px 0px var(--box-shadow);
      z-index: 1;
      border-radius: 5px;

      display: flex;
      padding: 20px 10px;
      opacity: 1;

      flex-direction: column;
      gap: 10px;
      border-radius: 0.4em;
      border: 0.125rem solid transparent;
      background-color: transparent;
      background: linear-gradient(var(--color-grey-2), var(--color-grey-2))
          padding-box,
        linear-gradient(to right, rgba(211, 0, 0, 0.83), rgba(0, 0, 0, 0.25))
          border-box;

      a {
        color: var(--color-white-0);

        &:after {
          content: "";

          left: 50%;

          height: 0.125rem;
          width: 0;

          position: absolute;
          background: linear-gradient(
              to right,
              rgba(211, 0, 0, 0.83),
              rgba(0, 0, 0, 0.25)
            )
            left bottom transparent no-repeat;

          transition: width 0.5s ease 0s, left 0.5s ease 0s;
        }

        &:hover:after {
          width: 100%;

          left: 0;
        }
      }

      li {
        padding: 12px 16px;
        border-radius: 4px;

        transition: 0.5s;

        &:hover {
          background-color: var(--color-grey-1);
        }
      }
    }

    /* .dropdown:hover .dropdown-content {
      display: block;
    } */
  }
`;
