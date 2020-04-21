import firebase from "firebase/app"
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7ATnfctDxCAjk521Jq6Vn_LE3CfnXfpE",
    authDomain: "tasklist-tut.firebaseapp.com",
    databaseURL: "https://tasklist-tut.firebaseio.com",
    projectId: "tasklist-tut",
    storageBucket: "tasklist-tut.appspot.com",
    messagingSenderId: "377995023750",
    appId: "1:377995023750:web:38ac11e5133b52b694c807",
    measurementId: "G-JQCM7MFW02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dataBase = firebase.firestore();

dataBase.settings({ timestampsInSnapshots: true });
export default dataBase;