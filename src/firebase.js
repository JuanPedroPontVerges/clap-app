import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCOG8X0smqIbiKfbUY_DepVibH-VEeM1hM",
  authDomain: "app-login-f87f0.firebaseapp.com",
  databaseURL: "https://app-login-f87f0.firebaseio.com",
  projectId: "app-login-f87f0",
  storageBucket: "app-login-f87f0.appspot.com",
  messagingSenderId: "757970476501",
  appId: "1:757970476501:web:5761c8aa02e6c1fdcaf15c"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}