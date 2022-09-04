import styled from "styled-components";

export const ContainerForm = styled.div`
  padding-bottom: 1.875rem;
  color: var(--color-white-4);
  background: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    left bottom var(--color-grey-4) no-repeat;
  background-size: 100% 1px;
`;

export const Form = styled.form`
  background-color: var(--color-grey-4);
  padding: 0.625rem;
  border-width: 0.125rem;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    10;

  div {
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
      height: 5rem;
      margin-bottom: 0.625rem;

      font-size: 1rem;
      outline: none;
      resize: none;

      color: var(--color-white-0);
      background-color: var(--color-grey-4);
    }

    textarea:focus {
      outline: none;
    }

    button {
      align-self: flex-end;
      width: 3.75rem;
      min-height: 1.875rem;
    }

    @media screen and (min-width: 425px) {
      button {
        padding: 0 30px;
        width: auto;
      }
    }
  }
`;
