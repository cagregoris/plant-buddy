import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJGh8H1wgBxYfnouP19rdNrJw6MHKi0jk",
  authDomain: "plant-buddy-f9d16.firebaseapp.com",
  projectId: "plant-buddy-f9d16",
  storageBucket: "plant-buddy-f9d16.appspot.com",
  messagingSenderId: "116196242894",
  appId: "1:116196242894:web:aaaa3de7f3d4664d15a79f"
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();