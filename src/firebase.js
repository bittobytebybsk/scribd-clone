import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAjGWmlsaU9jcRR9zFdtMPz3YCX1HffyH0',
  authDomain: 'clone-7d473.firebaseapp.com',
  projectId: 'clone-7d473',
  storageBucket: 'clone-7d473.appspot.com',
  messagingSenderId: '387977167538',
  appId: '1:387977167538:web:52a6dd6477d22e1120ffab',
  measurementId: 'G-8971PV5QM6',
});

const db = firebaseApp.firestore();

export default db;
