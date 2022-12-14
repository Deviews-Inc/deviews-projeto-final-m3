import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  border: 0.125rem solid;
  border-image: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    10;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.875rem;

  .userPost {
    width: 90%;
    display: flex;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    }
  }

  .editPost {
    color: var(--color-grey-0);
    transition: 0.5s;

    &:hover {
      color: var(--color-white-0);
    }
  }
  .deletePost {
    color: var(--color-grey-0);
    transition: 0.5s;

    &:hover {
      color: var(--color-red-0);
    }
  }

  div {
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.625rem;
    padding-right: 0.313rem;
    margin: 0.625rem 0 1.25rem 0;

    img {
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 50%;
    }

    h2 {
      color: var(--color-white-0);
      text-align: center;
    }

    p {
      color: var(--color-grey-1);
      font-size: 0.875rem;
    }
  }

  .content {
    font-size: 1.125rem;
    line-height: initial;
    font-weight: 400;
    color: white;
    padding: 0 0.625rem 0 0.625rem;
    text-align: start;
    width: 90%;
    margin-bottom: 1.875rem;
  }

  img {
    width: 90%;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 0.625rem;
  }

  .bottom_info {
    height: 10%;
    width: 90%;
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-size: 0.8rem;
      font-weight: 400;
      color: var(--color-grey-0);
      width: 90%;
      text-align: start;
    }
    div {
      width: 10%;
      margin: 0;

      img {
        margin: 0 auto;
        width: 60%;
        border: none;
      }
    }
  }

  .container_name {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 5px;
  }

  @media screen and (min-width: 768px) {
    .container_name {
      flex-direction: initial;
      gap: 20px;
    }
  }
`;
