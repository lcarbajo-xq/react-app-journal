import { firebase, googleAuthProvider } from "../firebase/firebase-config";

import Swal from "sweetalert2";

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";
import { notesLogoutCleaning } from "./notes";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        Swal.fire("Login Fail", err.message, "error");
      });
  };
};

export const startRegisterWithEmaulPasswordName = (email, name, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        Swal.fire("Login Fail", err.message, "error");
      });
  };
};
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogoutCleaning());
    console.log("Adios");
  };
};

export const logout = () => ({
  type: types.logout,
});
