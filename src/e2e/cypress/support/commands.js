import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

const fbConfig = {
  apiKey: 'AIzaSyCGy4ArWMpmGZclBewQo6OjiUDrBOm7yrk',
  authDomain: 'site-su-prod.firebaseapp.com',
  databaseURL: 'site-su-prod',
  projectId: 'site-su-prod.appspot.com',
  storageBucket: 'REACT_APP_MESSAGING_SENDER_ID=339580091725',
  messagingSenderId: '1:339580091725:web:738fe0a998e79ea2eb4b04'
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
