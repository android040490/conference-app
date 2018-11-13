import firebase from 'firebase';

export const appName = 'conferences-6dad4'

export const firebaseConfig = {
    apiKey: "AIzaSyAuUWOLsj8UeJKiBXdsAvuXUcFUDQKWhPo",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `https://${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "682074861474"
  }

firebase.initializeApp(firebaseConfig)