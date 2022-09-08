import styled from "styled-components";

export const Container = styled.div``;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  li {
    display: flex;
    border: 1px solid white;
    figure {
      width: 40px;
      overflow: hidden;
      img {
        width: 40px;
      }
    }
  }
`;
