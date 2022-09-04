import { ReactNode } from "react";
import { ButtonComponent } from "./style";

interface IButtonProps {
  children: ReactNode;
}

const ButtonEdit = ({ children }: IButtonProps) => {
  return <ButtonComponent type="submit">{children}</ButtonComponent>;
};
export default ButtonEdit;
