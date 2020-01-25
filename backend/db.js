const firebase = require("firebase");
require("firebase/firestore");
const firebaseAuth = require("firebase/auth");
const admin = require('firebase-admin')
const serviceAccount = require('./blah-17eb0-firebase-adminsdk-rk7kv-3502149c98.json')

const ref = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blah-17eb0.firebaseio.com"
});

var db = ref.firestore();

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
    firebase,
    db
}