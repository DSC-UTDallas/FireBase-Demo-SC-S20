# FireBase-Demo

Source: https://firebase.google.com/docs/firestore/quickstart
Video: https://www.youtube.com/watch?v=2Vf1D-rUMwE

## Step 1: Setting up Firebase

1. Create a project at https://console.firebase.google.com/u/0/
2. Create a databse from the Database Console
3. Go to General and start with  the Web platform under Your Apps
4. npm install -g firebase-tools --save
5. Get config from Firebase SDK snippet
6. In the database console, go to the rules tab and change false to true in line 5

## Step 2: Set up your development environment

npm install firebase --save

## Step 3: Initialize Cloud Firestore

const firebase = require("firebase"); //Firebase App (the core Firebase SDK) is always required and must be listed before other Firebase SDKs
require("firebase/firestore"); // Add the Firebase products that you want to use
firebase.initializeApp(firebaseConfig); // Initialize Firebase
var db = firebase.firestore(); //Initialize an instance of Cloud Firestore

## Step 4: Adding Data

db.collection(collectionName).add({
    fieldName: fieldValue
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

## Step 5: Read Data

db.collection(collectionName).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().fieldName}`);
    });
});