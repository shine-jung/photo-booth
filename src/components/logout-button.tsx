import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { Button } from "@mui/material";

function LogoutButton() {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Button onClick={logout} color="error" variant="soft">
      로그아웃
    </Button>
  );
}

export default LogoutButton;
