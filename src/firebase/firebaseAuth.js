import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const executeCreateUserWithEmailAndPassword = async (
  email,
  password
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const executeSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const executeSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // add user to firestore
};

export const executeSignOut = () => {
  return auth.signOut();
};

export const executePasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const executePasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const executeSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
