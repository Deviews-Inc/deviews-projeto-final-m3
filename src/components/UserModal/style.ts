import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;

  .containerUser {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    figure {
      z-index: 10;
      overflow: hidden;
      border-radius: 50%;
      width: 5.75rem;
      height: 5.75rem;
    }
    figure > img {
      height: 5.75rem;
      z-index: 9;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      span {
        font-size: 1.35rem;
        color: var(--color-grey-0);
      }

      h3 {
        font-size: 1.75rem;
        color: var(--color-white-0);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .containerUser {
      div {
        flex-direction: row;
      }
    }
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 0.625rem;
  margin: 0 auto;

  width: 100%;

  label {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .entry {
    width: 90%;
    height: 3rem;

    padding-left: 1.3125rem;
    outline: 0;

    border-radius: 0.5rem;
    border: 2px solid transparent;

    color: var(--color-white-0);
    box-shadow: var(--box-shadow);
    background-color: var(--color-grey-2);
    transition: 0.3s;

    &:focus {
      border: 2px solid var(--color-grey-1);
    }
  }
  .entryDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    width: 90%;

    position: relative;

    input {
      width: 100%;
      height: 3rem;

      padding-left: 1.3125rem;
      outline: 0;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      border: 2px solid transparent;

      box-shadow: var(--box-shadow);
      background-color: var(--color-grey-2);
      color: var(--color-white-0);
      transition: 0.3s;

      &:focus {
        border-color: var(--color-grey-1);
      }
    }
    .btn_add {
      display: flex;
      align-items: center;

      width: auto;
      height: 100%;

      position: absolute;

      right: 10px;

      background-color: transparent;

      svg {
        color: var(--color-grey-0);

        width: 1.125rem;
        height: 1.125rem;

        transition: 0.3s;

        &:hover {
          color: var(--color-white-0);
        }
      }

      .eyeOpen {
        width: 1.25rem;
        height: 1.25rem;
      }
    }

    @media screen and (min-width: 425px) {
      width: 16.875rem;
    }
  }
`;
