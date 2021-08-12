import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Development
const app = firebase.initializeApp({
  apiKey: 'AIzaSyB_BdQODUbVnbc8pCt-O6PxgtlQ_mTr9GM',
  authDomain: 'site-su-develop.firebaseapp.com',
  projectId: 'site-su-develop',
  storageBucket: 'site-su-develop.appspot.com',
  messagingSenderId: '248071799426',
  appId: '1:248071799426:web:534c636cc899ae3dfe2a9b'
});

// Production
// const app = firebase.initializeApp({
//   apiKey: 'AIzaSyCGy4ArWMpmGZclBewQo6OjiUDrBOm7yrk',
//   authDomain: 'site-su-prod.firebaseapp.com',
//   projectId: 'site-su-prod',
//   storageBucket: 'site-su-prod.appspot.com',
//   messagingSenderId: '339580091725',
//   appId: '1:339580091725:web:738fe0a998e79ea2eb4b04'
// });

// Methods from firebase
export const auth = app.auth();
export const db = app.firestore();
