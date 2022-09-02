import { ReactNode } from "react";
import { ButtonComponent } from "./style";

interface IButtonProps {
  children: ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return <ButtonComponent type="submit">{children}</ButtonComponent>;
};
export default Button;
