import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import { firebaseConfigs } from './secrets'

// Your web app's Firebase configuration
var firebaseConfig = firebaseConfigs
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase
