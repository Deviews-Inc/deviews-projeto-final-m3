import styled from "styled-components";

export const DivDashboard = styled.div`
  display: flex;
  width: 100vw;
  background-color: #1e1e1e;

  img,
  figure {
    width: 4rem;
    height: 4rem;
  }
  .figureName {
    display: flex;
    align-items: center;
  }

  .nameAvatar {
    display: flex;
    flex-direction: column;
  }
  .bioETechs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 0.7rem;
  }

  aside {
    border-right: 2px solid #606060;
    height: 100vh;
    margin-right: 2rem;
    padding-right: 1rem;
  }
  h4 {
    font-size: 1.5rem;
    color: #ffffff;
  }

  p {
    color: #606060;
    font-size: 1rem;
    margin-top: 2px;
  }
  span {
    color: #ffffff;
    font-size: 1rem;
  }

  textarea {
    width: 475px;
    height: 123px;
    background-color: #1d1d1d;
    border: none;
    box-shadow: none;
    color: #ffffff;
    font-size: 1rem;
  }
  textarea:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  .searchbtn {
    border: 2px solid #606060;
    width: 35rem;
    height: 10rem;
  }

  button {
    margin-bottom: 13rem;
    margin-top: -1rem;
    margin-left: 402px;
    width: 9rem;
    height: 2.5rem;
  }

  input {
    width: 19rem;
    height: 2rem;
    border-radius: 50px;
    background-color: #1d1d1d;
    border: 2px solid #606060;
    color: #ffffff;
  }

  input::placeholder {
    font-size: 1rem;
    color: #8a8a8a;
    padding: 0.5rem;
  }

  main {
    padding-right: 1rem;
    width: 100%;
  }

  .line {
    border: 1px solid #606060;
    width: 33rem;
    margin: 1rem;
  }
  .asideInput {
    border-right: none;
    border-left: 2px solid #606060;
    height: 100vh;
    margin-left: 2rem;
    padding-left: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
      display: none;
    }

    .mainMobile {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0;
      align-items: center;
    }

    .figureName {
      display: flex;
      justify-content: center;
      margin-left: 20px;
      width: 90vw;
    }

    aside {
      border: none;
      height: 100px;
    }
    .asideInput {
      height: 50px;
      border: none;
      margin-left: unset;
    }
    .searchbtn {
      width: 19rem;
      height: 10rem;
      margin-left: 0.5rem;
      position: relative;
      border: 2px solid #606060;
    }
    textarea {
      width: 19rem;
      height: 10rem;
    }
    button {
      bottom: 1rem;
      right: 1rem;
      width: 88px;
      height: 41px;
      position: absolute;
      margin: unset;
    }

    .line {
      width: 18rem;
      margin-left: 0.5rem;
    }

    input {
      width: 18rem;
    }
  }
`;
