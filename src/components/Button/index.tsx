import { ButtonComponent } from "./style";

interface IButtonProps {
  children: string;
}

const Button = ({ children }: IButtonProps) => {
  return <ButtonComponent type="submit">{children}</ButtonComponent>;
};
export default Button;
