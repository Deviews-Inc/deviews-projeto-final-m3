import Routes from "./routes";
import SearchInput from "./components/SearchInput";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <>
      <GlobalBase />
      <GlobalReset />
      <SearchInput />

      <Routes />
    </>
  );
}

export default App;
