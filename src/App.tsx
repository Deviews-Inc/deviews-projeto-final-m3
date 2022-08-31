import Routes from "./routes";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalBase />
      <Header />
      <GlobalReset />
      <Routes />
    </>
  );
}

export default App;
