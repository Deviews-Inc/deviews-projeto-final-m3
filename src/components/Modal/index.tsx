import { ContainerBackground, ContainerModal } from "./style";
import { CgClose } from "react-icons/cg";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <>
      <ContainerModal>
        <div className="containerButton">
          <CgClose onClick={onClose} className="close" />
        </div>
        <div className="container_infos">{children}</div>
      </ContainerModal>
      <ContainerBackground onClick={onClose} />
    </>
  );
};

export default Modal;
