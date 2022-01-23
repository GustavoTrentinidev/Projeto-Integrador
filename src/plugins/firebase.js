import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTcCMT4D7L857WSekgf-bm0QEbzIiWwLw",
    authDomain: "ganf-news.firebaseapp.com",
    projectId: "ganf-news",
    storageBucket: "ganf-news.appspot.com",
    messagingSenderId: "1005242723449",
    appId: "1:1005242723449:web:1bf205904a2b803c4a78a8"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()
const auth = firebase.auth()
const profileCollection = database.collection("profile")
const newsCollection = database.collection("news")
const googleProvider = new firebase.auth.GoogleAuthProvider()

export{
    database, auth, profileCollection, newsCollection, googleProvider
}