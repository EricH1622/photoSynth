//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDi4rTv98Kjz3wr4-x8u8L-80mc7st_Kr4",
    authDomain: "fir-comp1800-4d96a.firebaseapp.com",
    projectId: "fir-comp1800-4d96a",
    storageBucket: "fir-comp1800-4d96a.appspot.com",
    messagingSenderId: "303809272581",
    appId: "1:303809272581:web:498117f3ca56ef348af56c",
    measurementId: "G-QSDDYNCRS6"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();