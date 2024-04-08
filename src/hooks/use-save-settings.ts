import { useMutation } from "react-query";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { SettingsData } from "../types/settings-data";

export const useSaveSettings = () => {
  return useMutation(async (data: SettingsData) => {
    const docRef = doc(db, "settings", "adminSettings");
    await setDoc(docRef, data);
    alert("저장되었습니다.");
  });
};
