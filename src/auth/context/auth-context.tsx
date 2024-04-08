import { createContext } from "react";
import { User } from "firebase/auth";

type AuthContextType = {
  currentUser: User | null;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
