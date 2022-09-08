import styled from "styled-components";

export const Container = styled.div``;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 90%;
  width: 100%;
  overflow: auto;

  li {
    width: 80%;
    display: flex;
    border-radius: 8px;
    color: white;
    gap: 40px;
    padding: 25px;
    background-color: var(--color-grey-3);
    opacity: 0.6;

    a {
      color: white;
    }

    figure {
      width: 40px;
      height: 40px;
      overflow: hidden;
      object-fit: cover;

      img {
        width: 100%;
        height: 80%;
      }
    }

    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
    }
  }

  li:hover {
    opacity: 0.9;
    transition: 500ms;
    cursor: pointer;
    text-decoration: underline;
  }
`;
