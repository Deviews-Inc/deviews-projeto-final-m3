import styled from "styled-components";

export const ContainerBackground = styled.div`
  position: fixed;
  background: var(--color-grey-3-modal);
  width: 100vw;
  height: 100vh;

  z-index: 1000;
`;

export const ContainerModal = styled.div`
  background: var(--color-grey-3);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 80%;
  padding: 10px;
  z-index: 1001;

  border-radius: 0.8em;
  border: 0.125rem solid transparent;
  background-color: transparent;
  background: linear-gradient(var(--color-grey-4), var(--color-grey-4))
      padding-box,
    linear-gradient(to right, rgba(211, 0, 0, 0.83), rgba(0, 0, 0, 0.25))
      border-box;
  overflow-x: auto;

  .containerButton {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .close {
      color: var(--color-grey-1);
      position: relative;
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;
