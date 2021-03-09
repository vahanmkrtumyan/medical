import React, { useState } from "react";
import firebase from "../../firebase";
import * as Icon from "react-feather";

export default function CategoryModal({ closeModal }) {
  var db = firebase.firestore();
  const [category, setCategory] = useState("");

  function handleAdd() {
    console.log("mtav");
    db.collection("categories")
      .add({
        name: category,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
  return (
    <div
      className="modal fade show"
      style={{ padding: "16px", display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{ padding: "16px" }}>
          <button
            type="button"
            onClick={closeModal}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            style={{
              marginBottom: "8px",
              display: "block",
              marginLeft: "auto",
              position: "static",
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="col-lg-12 col-md-6">
            <div className="form-group">
              <label>Add a category</label>
              <input
                type="text"
                name="category"
                className="form-control"
                onChange={(e) => setCategory(e.target.value.trim())}
                value={category}
              />
            </div>
          </div>

          <div style={{ textAlign: "right", width: "95%" }}>
            <button
              className={`btn ${category ? "btn-primary" : "btn-disabled"} `}
              onClick={handleAdd}
              disabled={!category}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
