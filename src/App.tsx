import AuthProvider from "./providers/AuthContext";
import PostProvider from "./providers/PostContext";
import Routes from "./routes";
import GlobalBase from "./styles/base";
import GlobalReset from "./styles/reset";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <GlobalBase />
        <GlobalReset />
        <Routes />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
