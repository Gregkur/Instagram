import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        //there is a user
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //There is no user
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, [firebase]);

  return { user };
}
