import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <>
      <GlobalBase />
      <GlobalReset />
      <div>teste</div>
      <label htmlFor="">testando label</label>
      <input type="text" placeholder="teste" />
    </>
  );
}

export default App;
