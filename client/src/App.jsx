import useAuth from "./contexts/useAuth";
import UnauthenticatedApp from "./routes/UnauthenticatedApp";
import AuthenticatedApp from "./routes/AuthenticatedApp";

function App() {
  const { state: authState } = useAuth();

  return (
    <div>{authState.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>
  );
}

export default App;
