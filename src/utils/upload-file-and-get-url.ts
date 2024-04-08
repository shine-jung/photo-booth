import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../service/firebase";
import { v4 as uuidv4 } from "uuid";
import { FirebaseError } from "firebase/app";

const uploadFileAndGetUrl = async (file: File): Promise<string> => {
  try {
    const path = `images/${uuidv4()}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  } catch (error) {
    if (error instanceof FirebaseError) {
      if (error.code === "storage/unauthorized") {
        throw error.code;
      }
    }
    throw "파일 업로드에 실패했습니다.";
  }
};

export default uploadFileAndGetUrl;
