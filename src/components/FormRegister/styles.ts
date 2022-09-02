import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  margin: 0;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--color-grey-3);

  figure {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 4.3125rem;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    .divForm {
      flex: 50%;
      display: flex;
      flex-flow: column;
      width: 100%;
      align-items: baseline;
      gap: 10px;

      label {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .entry {
        height: 3rem;
        width: 90%;
        padding-left: 1.3125rem;
        outline: 0;
        border-radius: 8px;
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
        border-radius: 8px;
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
        button {
          background-color: transparent;
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
        button {
          background-color: transparent;
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
        flex-flow: column;
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
  @media screen and (min-width: 768px) {
    figure {
      display: none;
    }
    .container {
      flex-flow: row;
    }
  }
  @media screen and (min-width: 1024px) {
    width: 70%;

    .form_left {
      border-right: 2px solid var(--color-grey-1);
    }
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  outline: 0;
  border-radius: 5px;
  gap: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: var(--box-shadow);
  background-color: var(--color-grey-2);
  color: var(--color-white-0);
`;
