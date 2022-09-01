import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 80%;
  width: 90%;

  margin: 0 auto;

  figure > img {
    width: 4.3125rem;
  }

  label {
    width: 90%;
  }

  input {
    width: 81.9%;
    height: 3rem;

    padding-left: 1.3125rem;
    outline: 0;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    background-color: var(--color-grey-2);
    color: var(--color-white-0);
  }

  span {
    font-size: 0.75rem;
    color: var(--color-red-0);
    width: 90%;
  }

  button {
    width: 90%;
  }

  p {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;
    text-align: center;
    font-size: 0.75rem;
    color: var(--color-grey-0);

    a {
      font-size: 0.75rem;
      color: var(--color-red-0);
    }
  }

  @media screen and (min-width: 425px) {
    label {
      width: 18.1875rem;
    }
    input {
      width: 16.875rem;
    }

    span {
      width: 18.1875rem;
    }

    button {
      width: 18.1875rem;
    }
  }
`;

export const ContainerPassword = styled.div`
  width: 81.9%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  input {
    width: 100%;
  }

  button {
    position: absolute;

    width: auto;

    display: flex;
    align-items: center;

    right: 0;
    bottom: 14px;

    background-color: transparent;

    svg {
      color: var(--color-grey-0);

      width: 1.125rem;
      height: 1.125rem;
    }

    .eyeOpen {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  @media screen and (min-width: 425px) {
    width: 16.875rem;
  }
`;
