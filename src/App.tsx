import { useAuthContext } from "./auth/hooks";
import LoginForm from "./components/login-form";
import LogoutBtn from "./components/logout-btn";

function App() {
  const { currentUser } = useAuthContext();

  return (
    <>
      {currentUser ? (
        <p>
          Welcome, {currentUser.email} <LogoutBtn />
        </p>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
