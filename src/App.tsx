import AuthProvider from "./providers/AuthContext";
import Routes from "./routes";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <AuthProvider>
      <GlobalBase />
      <GlobalReset />
      <Routes />
    </AuthProvider>
  );
}

export default App;
