const express = require('express');
const router = express.Router();
const firebase = require('../db').firebase;

var db = firebase.firestore();


// router.get('/postInitialDataToDB', (req,res) => {
//     var arrImages = [
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/action-comics--1004-cover-art-by-steve-rude.png?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/actioncomics1000steverude30s.jpg?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/adventuretime75variantgracepark.png?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/amazing-spider-man--2-cover-art-by-ryan-ottley.png?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/batgirl20joshuemiddleton.jpg?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/batgirl--26-variant-cover-art-by-joshua-middleton.jpg?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/books-of-magic--2-cover-art-by-kai-carpenter.png?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/coda--3-cover-art-by-matias-bergara.png?1384968217",
//         "https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccoversof2018/large/daysofhate1danijel-zezeljtommuller.png?1384968217"



//     ];
//     var docRef = db.collection("reviews");
//     for(i = 0; i < 9; i++) {
//         let comicName = 'name' + i;
//         db.collection("reviews").add({
//             name: comicName,
//             body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper pulvinar porttitor. Cras eget lorem ut libero luctus sagittis sed in ipsum. Fusce maximus, nulla ornare facilisis posuere, metus sapien interdum lectus, non auctor augue erat in urna. Morbi tincidunt aliquam metus vel faucibus. Curabitur eget neque vitae sem sagittis finibus. Nullam sed libero sodales, bibendum magna at, cursus enim. Nunc bibendum, ante sed ultricies consectetur, mauris est aliquet sem, quis dictum massa mauris non dui. Donec venenatis scelerisque sem, sed lobortis ligula porta consectetur. Duis felis lacus, vestibulum a ornare at, pellentesque id lorem. Quisque sed iaculis tellus."
//             +
//             "Vivamus id ullamcorper risus, eget tempor dolor. Nullam consequat tortor ut arcu tincidunt, non vestibulum ex suscipit. In posuere purus tortor, at sollicitudin orci placerat vitae. Duis lectus augue, posuere nec neque et, scelerisque ultricies erat. Pellentesque ac convallis purus. Phasellus dignissim eget odio in suscipit. Cras mollis, velit at convallis ultricies, arcu odio sagittis magna, a pellentesque augue leo ac quam. Praesent viverra suscipit quam, id ultrices dui pharetra et. Donec eget varius leo. Proin posuere diam ultrices nulla interdum, et sagittis nulla fringilla. Suspendisse volutpat dignissim neque eget semper."
//             +
//             "Nulla vehicula dignissim justo, pretium gravida sapien imperdiet sed. Suspendisse ex nisi, mattis nec vehicula ut, scelerisque sed tellus. Nunc cursus lacus id arcu lacinia pellentesque. Fusce leo massa, molestie at sem vel, lobortis consectetur felis. Aliquam nisi felis, fermentum in turpis at, blandit dictum lorem. Morbi ultrices, nulla quis sodales rhoncus, nulla ex imperdiet ante, eu gravida dui tortor sed lorem. Sed mollis dolor pharetra vehicula suscipit. Cras ut ultricies purus. Cras lobortis velit sed justo dignissim sollicitudin. Pellentesque vehicula lorem eros, sit amet vestibulum ante accumsan quis. Proin eget suscipit nisi, vitae tincidunt arcu. Fusce iaculis consectetur nisl quis tristique. Phasellus metus nisi, pellentesque varius mi et, congue dictum eros. Proin vel elementum felis. Aenean sit amet turpis diam."
//             +
//             "Integer porta dolor in mi viverra, sed suscipit justo cursus. Fusce dapibus nisl vel arcu pulvinar sagittis. Nam efficitur justo odio, malesuada molestie neque pretium nec. Sed gravida neque id vestibulum maximus. Morbi ut venenatis velit. Nulla congue porttitor purus eget pulvinar. Aenean vitae orci libero."
//             +
//             "Praesent suscipit metus quis lacus efficitur semper. Proin vulputate aliquam leo non consectetur. Vestibulum lobortis sem dui, non malesuada purus aliquet ut. In imperdiet posuere felis sed tincidunt. Nulla lobortis neque in mauris elementum laoreet. Maecenas tempus tortor non dolor suscipit tempor. Donec quis metus nunc. Maecenas non velit accumsan, pulvinar metus at, tempus libero. Sed porttitor eros a tortor rutrum, sed iaculis ligula aliquet. Morbi tristique cursus neque, at convallis orci fringilla non. Sed consequat sed urna a semper. Integer porttitor massa ut arcu tincidunt semper.",
//             imageURL: arrImages[i]
//         })
//         .then( (docRefer) => {
//             console.log("Doc added with ID:", docRef.id);
//         })
//         .catch( (error) => {
//             console.log("Error in adding document:", error);
//         });
//     }

//     res.json({success: true})
// })



router.get('/test', (req,res) => {
    var data = {
        name: 'name',
        phone: 'phone'
    }
    var docRef = db.collection("comicbookusers");
    var arr = [];
    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            //console.log(doc.id, "=>", doc.data());
            arr.push(doc.data());
            
        })
        res.json({data: arr});
    })
    console.log("works")
    
    // docRef.get().then(function(doc) {
    //     if (doc.exists) {
    //         res.json(doc.data());
    //     }
    //     else {
    //         console.log("no doc");
    //     }
    // }).catch(function(error) {
    //     console.log('error')
    // })
    
})

router.get('/getReviews', (req,res) => {
    var docRef = db.collection('reviews');
    var arr = [];
    var arrID = [];
    docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var obj = {
                'id': doc.id,
                'artist': doc.data()['artist'],
                'body': doc.data()['body'],
                'coverPrice': doc.data()['coverPrice'],
                'imageURL': doc.data()['imageURL'],
                'publisher': doc.data()['publisher'],
                'releaseDate': doc.data()['releaseDate'],
                'score': doc.data()['score'],
                'title': doc.data()['title'],
                'writer': doc.data()['writer'],
                'name' : doc.data()['name']
            }
            arr.push(obj);
            arrID.push(doc.id);
        })
        //console.log(arr);
        res.json({data: arr});
    })
})

router.post('/addReviewToDB', (req,res) => {
    console.log(req.body.writer, req.body.title, req.body.artist);
    var docRef = db.collection("reviews");
    docRef.add({
        writer: req.body.writer,
        title: req.body.title,
        artist: req.body.artist,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        coverPrice: req.body.coverPrice,
        body: req.body.review,
        score: req.body.score,
        imageURL: req.body.image,
    })
    .then( (docRefer) => {
        console.log("Doc added with ID:", docRef.id);
        res.redirect("/");
    })
    .catch( (error) => {
        console.log("Error in adding document:", error)
    })
    
})

router.post('/editReviewToDB', (req,res) => {
    let docRef = db.collection('reviews').doc(req.body.id)
    docRef.update({
        writer: req.body.writer,
        title: req.body.title,
        artist: req.body.artist,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        coverPrice: req.body.coverPrice,
        body: req.body.review,
        score: req.body.score,
        imageURL: req.body.image,
    }).then( (docRefer) => {
        console.log("Doc updated with ID:", docRef.id);
    })
    .catch( (error) => {
        console.log("Error in adding document:", error)
    })
    res.redirect('/')
})

router.delete("/deleteReview", (req,res) => {
    console.log(req.body.id)
    db.collection('reviews').doc(req.body.id).delete();
    console.log("deleted");
    res.send("removed")
})


module.exports = router