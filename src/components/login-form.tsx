import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../service/firebase";
import { FirebaseError } from "firebase/app";
import { Button, Stack, TextField } from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          alert("유효하지 않은 인증 정보입니다.");
        } else if (error.code === "auth/user-not-found") {
          alert("사용자를 찾을 수 없습니다.");
        } else if (error.code === "auth/wrong-password") {
          alert("비밀번호가 틀렸습니다.");
        } else {
          alert("오류가 발생했습니다.");
        }
      }
    }
  };

  return (
    <Stack onSubmit={signIn} component="form" spacing={2} mt={1}>
      <TextField
        label="이메일"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        size="small"
        autoFocus
      />
      <TextField
        label="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        size="small"
      />
      <Button type="submit" variant="contained">
        로그인
      </Button>
    </Stack>
  );
}

export default LoginForm;
