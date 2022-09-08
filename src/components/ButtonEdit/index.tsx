import { ReactNode, useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { ButtonComponent } from "./styles";

interface IButtonProps {
  children: ReactNode;
}

const ButtonEdit = ({ children }: IButtonProps) => {
  const { setOpenUserModal } = useContext(AuthContext);
  return (
    <ButtonComponent onClick={() => setOpenUserModal(true)} type="button">
      {children}
    </ButtonComponent>
  );
};
export default ButtonEdit;
