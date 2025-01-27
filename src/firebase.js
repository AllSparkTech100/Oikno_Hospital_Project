import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration

    apiKey: "AIzaSyD_nI9BD-4hkuRQisO2Cl8X2176qMEMNNg",
    authDomain: "mhs-test-f1c67.firebaseapp.com",
    projectId: "mhs-test-f1c67",
    storageBucket: "mhs-test-f1c67.firebasestorage.app",
    messagingSenderId: "248572720402",
    appId: "1:248572720402:web:19e6f600c51c5a009f2fcb"
})


var db = firebaseApp.firestore();

export { db };