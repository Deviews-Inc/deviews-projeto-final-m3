import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const ContainerName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  padding-bottom: 0.625rem;
  color: var(--color-white-4);
  background: linear-gradient(
      to right,
      rgba(211, 0, 0, 0.83),
      rgba(0, 0, 0, 0.25)
    )
    left bottom var(--color-grey-4) no-repeat;
  background-size: 100% 1px;

  figure {
    z-index: 10;
    overflow: hidden;
    border-radius: 50%;
    width: 4.375rem;
    height: 4.375rem;
  }
  figure > img {
    height: 4.375rem;
    z-index: 9;
  }

  span {
    font-size: 0.875rem;
    color: var(--color-grey-1);
  }

  h3 {
    color: var(--color-white-0);
    font-size: 1.25rem;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;

    h3 {
      font-size: 1.375rem;
    }

    span {
      font-size: 1rem;
    }

    figure {
      width: 5.625rem;
      height: 5.625rem;

      img {
        height: 5.625rem;
      }
    }
  }
`;

export const ContainerBio = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;

  h3,
  p {
    color: var(--color-white-0);
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    h3,
    p {
      font-size: 1.25rem;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: var(--color-white-0);
    font-size: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 11.375rem;
    max-height: 4.375rem;
    overflow: auto;
    gap: 0.625rem;
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }
    li {
      font-size: 0.875rem;
    }
  }
`;
