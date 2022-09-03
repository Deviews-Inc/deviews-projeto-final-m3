import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 100%;
  gap: 1.25rem;
  padding-bottom: 1.25rem;
  border-radius: 0.25rem;
  background-color: var(--color-grey-3);

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .container_form {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .container_div_form {
      width: 90%;
      margin-bottom: 1.25rem;

      @media screen and (min-width: 768px) {
        display: flex;
      }
    }

    .container_logo {
      display: flex;
      margin: 1.75rem auto;
      align-items: center;
      width: 90%;
      justify-content: space-between;

      h2 {
        margin: 0;
        font-size: 2rem;
        border-bottom: 0.125rem solid rgba(211, 0, 0, 0.3);
        border-style: solid;
        color: var(--color-white-0);
        padding-bottom: 0.625rem;
        width: 8.75rem;
        font-weight: 500;
      }

      img {
        width: 3.125rem;
      }

      @media screen and (min-width: 425px) {
        width: 18.1875rem;
      }

      @media screen and (min-width: 768px) {
        width: 90%;
        figure {
          display: none;
        }
      }
    }
    .divForm {
      display: flex;
      flex-flow: column;
      width: 100%;
      margin: 0 auto;
      gap: 0.625rem;

      label {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .entry {
        height: 3rem;
        width: 90%;
        padding-left: 1.3125rem;
        outline: 0;
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        background-color: var(--color-grey-2);
        color: var(--color-white-0);
      }
      .entryDiv {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
        width: 82%;
        padding-left: 1.3125rem;
        padding-right: 1.3125rem;
        outline: 0;
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        background-color: var(--color-grey-2);
        color: var(--color-white-0);
        input {
          background-color: var(--color-grey-2);
          color: var(--color-white-0);
        }
        input:focus {
          outline: none;
        }
        .btn_add {
          background-color: transparent;
          width: auto;
        }
        .iconReact {
          color: var(--color-grey-0);
          background-color: var(--color-grey-2);
          border: none;
        }
      }
      span {
        font-size: 0.75rem;
        color: var(--color-red-0);
        width: 90%;
      }
      ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: left;
        text-align: left;
        margin-top: 1rem;
        max-height: 6rem;
        overflow: auto;
        .btn_close {
          background-color: transparent;
          width: auto;
        }
        .iconReact {
          color: var(--color-grey-0);
          background-color: var(--color-grey-2);
          border: none;
        }
      }
      p {
        display: flex;
        flex-direction: column;
        gap: 0.3125rem;
        text-align: left;
        font-size: 0.75rem;
        height: 2rem;
        color: var(--color-grey-0);
        a {
          font-size: 0.75rem;
          color: var(--color-red-0);
        }
      }

      @media screen and (min-width: 425px) {
        align-items: center;

        label {
          width: 18.1875rem;
        }
        .entry {
          width: 16.875rem;
        }
        .entryDiv {
          width: 15.563rem;
        }
        span {
          width: 18.1875rem;
        }
        ul {
          width: 18.1875rem;
        }
      }
    }
  }
  button {
    width: 90%;
  }
  /* @media screen and (min-width: 26.5625rem) {
    .container_logo {
      width: 291px;
    }

    label {
      width: 291px;
    }
    .entry {
      width: 270px;
    }
    .entryDiv {
      width: 249.008px;
    }
    span {
      width: 291px;
    }
    ul {
      width: 291px;
    }
  } */

  @media screen and (min-width: 26.5625rem) {
    button {
      width: 291.008px;
    }
  }

  @media screen and (min-width: 64rem) {
    .form_left {
      border-right: 0.125rem;
      border-style: solid;
      border-image: linear-gradient(
          to bottom,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        1 100%;
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: 0;
  border-radius: 0.3125rem;
  gap: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  box-shadow: var(--box-shadow);
  background-color: var(--color-grey-2);
  color: var(--color-white-0);
`;
