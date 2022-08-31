import Button from "./components/Button";
import Modal from "./components/Modal";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <>
      <GlobalBase />
      <GlobalReset />
      <Modal>
        <figure>
          <img src="" alt="" />
        </figure>
        <h4>Frederico</h4>
        <span>FredericoCãoDev</span>
        <form action="">
          <textarea name="" id=""></textarea>
          <Button>Editar</Button>
        </form>
      </Modal>
    </>
  );
}

export default App;
