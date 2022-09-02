import FormPost from "../../components/FormPost";
import UserOptions from "../../components/UserOptions";

const Dashboard = () => {
  return (
    <>
    <aside>
      <UserOptions />
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

export default Dashboard;