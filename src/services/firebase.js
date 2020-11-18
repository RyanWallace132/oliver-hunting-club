import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import firebaseApp from 'firebase/app'

const config = {
    apiKey: "AIzaSyBdwE3whCb9qB7VOc0EOWCP3pe26tSWDOY",
  authDomain: "oliver-hunting-club.firebaseapp.com",
  databaseURL: "https://oliver-hunting-club.firebaseio.com",
  projectId: "oliver-hunting-club",
  storageBucket: "oliver-hunting-club.appspot.com",
  messagingSenderId: "225081417032",
  appId: "1:225081417032:web:700fe5f041284f6e9ba77d",
  measurementId: "G-Z0126MGYHP"


}
const fire = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const storage = firebase.storage()

export {db, storage}

export default function initFirebase() {
    if(!firebase.apps.length) {
        firebase.initializeApp(config)
    }
} 