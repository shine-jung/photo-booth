import { useQuery } from "react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";
import { SettingsData } from "../types/settings-data";

const fetchSettings = async () => {
  const docRef = doc(db, "settings", "adminSettings");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as SettingsData;
  } else {
    console.log("No such document!");
    return null;
  }
};

export const useSettings = () => {
  return useQuery<SettingsData | null>("settings", fetchSettings);
};
