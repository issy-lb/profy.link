import firebase from "firebase/app";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyBlrwgQsHHeRCejWdeDo3uOanx1b6JWcL8",
  authDomain: "profy-59433.firebaseapp.com",
  databaseURL: "https://profy-59433-default-rtdb.firebaseio.com",
  projectId: "profy-59433",
  storageBucket: "profy-59433.appspot.com",
  messagingSenderId: "901663339233",
  appId: "1:901663339233:web:333730f2dbe3f809e8fda0",
  measurementId: "G-8PYGLSEQX7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
