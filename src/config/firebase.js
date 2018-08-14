import firebase from 'firebase'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAILa2XtK8IYRBdk2aL9C-o0Aka6fKiGh0",
    authDomain: "reactflix-1a98c.firebaseapp.com",
    databaseURL: "https://reactflix-1a98c.firebaseio.com",
    projectId: "reactflix-1a98c",
    storageBucket: "reactflix-1a98c.appspot.com",
    messagingSenderId: "256253715127"
});
const db = firebase.database()

export { db }