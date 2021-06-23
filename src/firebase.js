import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCzPSlVwmGWvsDT4gBcA2ACo7yczPGQfCc",
  authDomain: "react-slack-clone-c7c34.firebaseapp.com",
  projectId: "react-slack-clone-c7c34",
  storageBucket: "react-slack-clone-c7c34.appspot.com",
  messagingSenderId: "1046103631112",
  appId: "1:1046103631112:web:182235fdd3707c69d2f8bd",
  measurementId: "G-018MQN6V40"
};

firebase.initializeApp(firebaseConfig);

export default firebase;