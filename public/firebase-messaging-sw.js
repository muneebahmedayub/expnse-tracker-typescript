importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyD_WV913Kmf2S-ALghqbgtfQNoz0ohTBw4",
    authDomain: "expense-tracker-cf9ac.firebaseapp.com",
    projectId: "expense-tracker-cf9ac",
    storageBucket: "expense-tracker-cf9ac.appspot.com",
    messagingSenderId: "1071670273450",
    appId: "1:1071670273450:web:50d2787aab0b883a80b7d3"
})

firebase.messaging()