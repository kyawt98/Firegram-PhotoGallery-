import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyAo2q06t2yFx-ehEjwpBvJejBXiSdqAuB8",

    authDomain: "firegram-29467.firebaseapp.com",

    projectId: "firegram-29467",

    storageBucket: "firegram-29467.appspot.com",

    messagingSenderId: "520791663220",

    appId: "1:520791663220:web:7a0a7b13df8ae1538ea721"

  };

  // Initialize Firebase

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};