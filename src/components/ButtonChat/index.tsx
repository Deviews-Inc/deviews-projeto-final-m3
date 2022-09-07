import { RiChat3Line } from "react-icons/ri";
import { Button } from "./style";

const Chat = ({ ...rest }) => {
  return (
    <Button {...rest}>
      <RiChat3Line />
    </Button>
  );
};
export default Chat;
