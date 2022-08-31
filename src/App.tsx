import Routes from "./routes";

import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <>
      <GlobalBase />
      <GlobalReset />

      <Routes />
    </>
  );
}

export default App;
