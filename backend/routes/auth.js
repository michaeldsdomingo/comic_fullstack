const express = require('express');
const router = express.Router();
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
        password,
        admin: false
    })
    .then( docRef => {
        // console.log("added")
    })
    
    
    res.redirect('/');
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
        console.log(authUser)
        authUser
        ? res.send(authUser)
        : res.send(authUser);
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

router.get('/sessionAuth', (req, res) => {
    // console.log('session auth')
    firebase.auth().onAuthStateChanged(authUser => {
        if(!authUser) {
            res.status(200).send(null)
        }
        else {
            let docRef = db.collection('users');
            // console.log(authUser.email)
            let user = docRef.where('email', '==', authUser.email).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    // console.log('got user')
                    // console.log(doc.data())
                    res.send(doc.data())
                })
            }).catch(error => {
                console.log('got user failed')
            })
        }
        
    })
})

module.exports = router