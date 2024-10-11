import {
  User,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

interface IUserAuthProps {
  children: React.ReactNode;
}

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

const logIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const logOut = () => {
  return signOut(auth);
};

const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

export const AuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

export const AuthContextProvider = (props: IUserAuthProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  const data: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};
