import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDP5SzoK807olNiMALmChLXhxFZZsMoDT8",
    authDomain: "hackathon-c73af.firebaseapp.com",
    databaseURL: "https://hackathon-c73af.firebaseio.com",
    projectId: "hackathon-c73af",
    storageBucket: "",
    messagingSenderId: "191346578560",
    // appId: "1:950209419705:web:355c238bb8bc95a5"
};
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");