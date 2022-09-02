import Button from "../../components/Button";
import FormPost from "../../components/FormPost";
import UserOptions from "../../components/UserOptions";
import { BiPencil } from "react-icons/bi";

const Profile = () => {
  return (
    <>
      <aside>
        <UserOptions />
      <Button><BiPencil/></Button>
      </aside>
      <aside>
        {/* Pesquisa */}
      </aside>
      <main>
        <FormPost />
        {/* Posts com scroll infinito */}
      </main>
    </>
  );
}

export default Profile;