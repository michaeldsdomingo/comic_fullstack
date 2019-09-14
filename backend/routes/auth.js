const express = require('express');
const router = express.Router();
const axios = require('axios');
const firebase = require("../db").firebase;

require("firebase/auth");

var db = firebase.firestore();


router.post('/newUser', (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        console.log('not successful in auth user', error);
    })

    let docRef = db.collection('users');
    docRef.add({
        email,
        password
    })
    .then( docRef => {
        console.log("added")
    })
    
    
    res.redirect('/');
})

router.post("/login", (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( () => {
        console.log("log in success")
        res.send('login success')

    })
    .catch(function(error) {
        console.log(error.message);
    })
    // res.redirect('/')
    
})

router.get("/logout", (req,res) => {
    firebase.auth().signOut()
    .then( () => {
        console.log('logout success')
        // res.redirect('/')
        
    })
    .catch( (error) => {
        console.log(error)
    })
})



router.get("/session", (req,res) => {
    firebase.auth().onAuthStateChanged(authUser => {
       
        authUser
        ? res.send(authUser)
        : res.send(authUser);
    })
    
})

router.get('/addUser', (req,res) => {
    let docRef = db.collection('users');
    docRef.add({
        first: 'Bill',
        last: 'Murray'
    })
    .then( docRef => {
        console.log("added")
    })
})

router.post('/currentUser', (req,res) => {
    let docRef = db.collection('users');
    console.log(req.body.authUser.email)
    let user = docRef.where('email', '==', req.body.authUser.email).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data())
            res.send(doc.data())
        })
    })
    
})

module.exports = router