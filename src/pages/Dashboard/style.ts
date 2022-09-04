import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50vw;
`;

export const ContainerMain = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  margin: 1.25rem auto;
  flex-direction: column;
  gap: 1.875rem;

  .container_info_user {
    flex-direction: column;
    display: flex;
    gap: 20px;
  }

  .container_search {
    display: flex;
    justify-content: center;
  }

  .container_posts {
    width: 100%;

    @media screen and (min-width: 768px) {
      padding: 1.25rem;
      border-width: 2px;
      border-style: solid;
      border-image: linear-gradient(
          to bottom,
          rgba(211, 0, 0, 0.83),
          rgba(0, 0, 0, 0.25)
        )
        1 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: inherit;
    justify-content: space-between;

    .container_posts {
      width: 50%;
    }
  }
`;
