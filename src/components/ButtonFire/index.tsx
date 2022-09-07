import { MdLocalFireDepartment } from "react-icons/md";
import { Icon } from "./style";

interface IButtonFireProps {
  rest?: any;
  liked?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonFire = ({ liked, onClick }: IButtonFireProps) => {
  return (
    <>
      <Icon onClick={onClick} liked={liked}>
        <MdLocalFireDepartment />
      </Icon>
    </>
  );
};
export default ButtonFire;
