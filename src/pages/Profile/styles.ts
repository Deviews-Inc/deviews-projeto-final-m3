import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
`;

export const ContainerMain = styled.div`
  width: 90%;
  height: 90vh;
  display: flex;
  margin: 1.875rem auto;
  flex-direction: column;
  gap: 1.875rem;

  main {
    width: 100%;
  }

  .container_info_user {
    display: flex;
    gap: 1rem;
    padding-bottom: 0.625rem;
    color: var(--color-white-4);
    background: linear-gradient(
        to right,
        rgba(211, 0, 0, 0.83),
        rgba(0, 0, 0, 0.25)
      )
      left bottom var(--color-grey-4) no-repeat;
    background-size: 100% 1px;

    div {
      background: transparent;
    }

    button {
      align-self: end;
      width: 40px;
    }

    @media screen and (min-width: 768px) {
      width: 10%;
    }
  }

  .container_search {
    display: flex;
    justify-content: center;
  }

  .container_posts {
    width: 100%;
    height: 1000px;
    overflow-y: auto;
  }
  .container_profile {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
    padding: 0rem 1.25rem;

    div > a > div {
      background: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: inherit;
    justify-content: space-between;

    main {
      padding: 0rem 1.25rem;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(
          to bottom,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        1 100%;
    }

    .container_posts {
      position: relative;
      height: 50vh;
      overflow-y: auto;
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      width: 50%;
    }
    .container_posts {
      width: 100%;
    }
  }
`;
