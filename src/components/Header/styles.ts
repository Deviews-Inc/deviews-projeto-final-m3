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
      margin-top: 210px;
      box-shadow: 0px 8px 16px 0px var(--box-shadow);
      padding: 12px 16px;
      z-index: 1;
      a{
        color: var(--color-white-0);
      }
      li{
        margin: 10px;
      }
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
  }
`;
