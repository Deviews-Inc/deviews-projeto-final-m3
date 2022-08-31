import styled from "styled-components";

export const ContainerBackground = styled.div`
  background: var(--color-grey-3-modal);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background: var(--color-grey-3);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  position: absolute;
  width: 90vw;
  height: 80vh;
  padding: 10px;

  .close {
    color: var(--color-grey-1);
    position: relative;
    top: 10px;
    left: 254px;
    width: 25px;
    height: 25px;
  }
`;
