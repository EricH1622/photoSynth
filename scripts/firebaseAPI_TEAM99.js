//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDi4rTv98Kjz3wr4-x8u8L-80mc7st_Kr4",
    authDomain: "bby31-project.firebaseapp.com",
    projectId: "bby31-project",
    storageBucket: "bby31-project.appspot.com",
    messagingSenderId: "685328665926",
    appId: "1:685328665926:web:b665930b3aba75e349e947",
    measurementId: "G-HS8K9N76HN"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();