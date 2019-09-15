const express = require('express');
const bodyParser = require('body-parser');
const reviewsdb = require('./routes/reviewsdb');
const auth = require('./routes/auth')
// Required for side-effects
require("firebase/firestore");
require("firebase/auth");


const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/reviewsdb', reviewsdb);
app.use('/auth', auth);

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         console.log(user.email);
//     }
// })




app.listen(80, () => console.log('Listening on port 80'));


