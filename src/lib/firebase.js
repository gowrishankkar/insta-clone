import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {seedDatabase} from '../seed'

const config = {
  apiKey: 'AIzaSyArvhplH6HWti4NLgvNQ6tyng7kKWzDDDY',
  authDomain: 'insta-clone-6c135.firebaseapp.com',
  projectId: 'insta-clone-6c135',
  storageBucket: 'insta-clone-6c135.appspot.com',
  messagingSenderId: '325633321909',
  appId: '1:325633321909:web:4669418511182f532d07fc'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };
