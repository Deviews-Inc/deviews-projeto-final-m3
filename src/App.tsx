import AuthProvider from "./providers/AuthContext";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <AuthProvider>
      <GlobalBase />
      <GlobalReset />
    </AuthProvider>
  );
}

export default App;
