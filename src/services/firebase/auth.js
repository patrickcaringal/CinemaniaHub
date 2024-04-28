import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "./config";

export const createUser = async ({ email, password }) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const signIn = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOut = async () => await firebaseSignOut(auth);

export const subscribeAuthStateChanged = (cb) => onAuthStateChanged(auth, cb);
