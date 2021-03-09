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
import CategoryModal from "../components/admin/CategoryModal";
import useCategories from "../components/admin/useCategories";
import * as Icon from "react-feather";

export default function admin() {
  const [user, setUser] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categories = useCategories();
  const provider = new firebase.auth.GoogleAuthProvider();
  var db = firebase.firestore();

  console.log(categories);

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
      setUser("signedIn");
    } else {
      setUser("signedOut");
    }
  });

  function RemoveCategory(category) {
    console.log(category);
    db.collection("categories")
      .doc(category.id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  return (
    <NoSSR>
      <Header />
      <PageTitle />
      {/* <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div> */}
      <div style={{ textAlign: "right", width: "95%" }}>
        {user === "signedOut" && (
          <button className="btn btn-primary" onClick={SignIn}>
            SignIn
          </button>
        )}
        {user === "signedIn" && (
          <button className="btn btn-primary" onClick={SignOut}>
            SignOut
          </button>
        )}
      </div>
      <button className="btn btn-primary" onClick={() => setCategoryOpen(true)}>
        Add a category
      </button>
      {categoryOpen && (
        <CategoryModal closeModal={() => setCategoryOpen(false)} />
      )}
      <h1
        style={{
          margin: "24px",
        }}
      >
        Categories
      </h1>
      <div
        style={{
          margin: "24px",
          display: "flex",
          columnGap: "16px",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              border: "2px solid #44ce6f",
              borderRadius: "24px",
              display: "inline-block",
              padding: "8px 16px",
            }}
          >
            {category.name}{" "}
            <Icon.X
              style={{ cursor: "pointer" }}
              onClick={() => RemoveCategory(category)}
            />
          </div>
        ))}
      </div>

      <Footer />
      <GoTop scrollStepInPx="50" delayInMs="16.66" />
    </NoSSR>
  );
}
