import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDsRQZnb0wW5jhSTg6ouyyi_bGyxEt2DgE",
  authDomain: "instagram-1d1cf.firebaseapp.com",
  projectId: "instagram-1d1cf",
  storageBucket: "instagram-1d1cf.appspot.com",
  messagingSenderId: "545523675924",
  appId: "1:545523675924:web:6dd590e8ad245b89424801",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
