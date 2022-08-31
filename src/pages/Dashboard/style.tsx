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
    font-size: 1.4rem;
  }

  textarea {
    width: 44.5rem;
    height: 13rem;
    background-color: #1d1d1d;
    border: none;
    box-shadow: none;
    color: #ffffff;
    font-size: 1.5rem;
  }
  textarea:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  .searchbtn {
    border: 2px solid #606060;
    width: 44.5rem;
    height: 16rem;
  }

  button {
    margin-left: 110rem;
    margin-bottom: 13rem;
    margin-top: -1rem;
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
  }
`;
