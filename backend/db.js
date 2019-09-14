const firebase = require("firebase");
require("firebase/firestore");
const firebaseAuth = require("firebase/auth");

var firebaseConfig = {
    apiKey: "AIzaSyBfMvD9s8oKRbTikoelHrkewFLd1eKX6mo",
    authDomain: "blah-17eb0.firebaseapp.com",
    databaseURL: "https://blah-17eb0.firebaseio.com",
    projectId: "blah-17eb0",
    storageBucket: "blah-17eb0.appspot.com",
    messagingSenderId: "630467214814",
    appId: "1:630467214814:web:136a9bcfa9d2d45c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



module.exports = {
    firebase
}