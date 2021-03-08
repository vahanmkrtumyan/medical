import React, { useState } from "react";
import { Preloader, Placeholder } from "react-preloading-screen";
import NoSSR from "react-no-ssr";
import Header from "../components/Layouts/Header";
// import Team from "../components/home-one/Team";
// import Funfacts from "../components/home-one/Funfacts";
// import Partner from "../components/home-one/Partner";
import Footer from "../components/Layouts/Footer";
import GoTop from "../components/Layouts/GoTop";
import PageTitle from "../components/admin/PageTitle";
import firebase from "../firebase";

export default function admin() {
  const [user, setUser] = useState("");
  const provider = new firebase.auth.GoogleAuthProvider();

  function SignIn() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        setUser("signedIn");
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  function SignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser("signedOut");

        console.log("signOut");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      setUser("signedIn");
    } else {
      setUser("signedOut");
    }
  });

  console.log({ user });

  return (
    <NoSSR>
      <Header />
      <PageTitle />
      {/* <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div> */}
      <div style={{ textAlign: "right", width: "95%" }}>
        {user === "signedOut" && (
          <button type="submit" className="btn btn-primary" onClick={SignIn}>
            SignIn
          </button>
        )}
        {user === "signedIn" && (
          <button type="submit" className="btn btn-primary" onClick={SignOut}>
            SignOut
          </button>
        )}
      </div>
      <label>
        Email Address <span className="required">*</span>
      </label>
      <input
        type="email"
        name="email"
        className="form-control"
        // onChange={handleOnChange}
        // value={state.email.value}
      />

      <Footer />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </NoSSR>
  );
}
