import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/*user ? logout : login*/}
      {user ? (
        <button onClick={handleSignOut}>SignOut</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Login</button>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Picture: {user.photoURL}</h3>
        </div>
      )}
    </div>
  );
};

export default Login;
