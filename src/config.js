/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
  apiKey: "AIzaSyCnxuLX6AgMduDMLtSJVDNJhR8xuMNvs4Y",
  authDomain: "tamiat-demo.firebaseapp.com",
  databaseURL: "https://tamiat-demo.firebaseio.com/",
  projectId: "tamiat-demo",
  storageBucket: "",
  messagingSenderId: "188459960333"
};

let app = Firebase.initializeApp(config);
let db = app.database();

// create a refrence to settings
const settingsRef = db.ref('settings');

export default settingsRef;