import { useAuthContext } from "./auth/hooks";
import LoginForm from "./components/login-form";
import LogoutBtn from "./components/logout-btn";
import ThemeProvider from "./theme";

function App() {
  const { currentUser } = useAuthContext();

  return (
    <ThemeProvider>
      <>
        {currentUser ? (
          <p>
            Welcome, {currentUser.email} <LogoutBtn />
          </p>
        ) : (
          <LoginForm />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
