import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { Button } from "@mui/material";

function LogoutBtn() {
  const logout = async () => {
    await signOut(auth);
  };

  return <Button onClick={logout}>로그아웃</Button>;
}

export default LogoutBtn;
