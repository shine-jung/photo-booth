import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";

function LogoutBtn() {
  const logout = async () => {
    await signOut(auth);
  };

  return <button onClick={logout}>로그아웃</button>;
}

export default LogoutBtn;
