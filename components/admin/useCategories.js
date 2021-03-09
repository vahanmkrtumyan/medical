import { useState, useEffect } from "react";
import firebase from "../../firebase";

export default function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("categories")
      .onSnapshot((snapshot) => {
        const fetchedCategories = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(fetchedCategories);
      });
  }, []);
  return categories;
}
