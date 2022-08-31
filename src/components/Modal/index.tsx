import { ContainerBackground, ContainerModal } from "./style";
import { CgClose } from "react-icons/cg";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <ContainerBackground>
        <ContainerModal>
          <CgClose className="close" />
          <div>{children}</div>
        </ContainerModal>
      </ContainerBackground>
    </>
  );
};

export default Modal;
