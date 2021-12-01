import firebase from "firebase";
import 'firebase/firebase';

const firebaseConfig = {

  apiKey: "AIzaSyDgTi6IAuN3vYnF8nqJkztAzMklNKxmHlQ",

  authDomain: "coder-react-a8cd0.firebaseapp.com",

  projectId: "coder-react-a8cd0",

  storageBucket: "coder-react-a8cd0.appspot.com",

  messagingSenderId: "898949670722",

  appId: "1:898949670722:web:d758b780b85f80a0c34adb"

};

const app = firebase.initializeApp(firebaseConfig);
export function getFiresore(){
    return firebase.firestore(app);
};