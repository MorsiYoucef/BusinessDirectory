// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA94OMkliA4xREe1pgOvvgugz-PZHNVXlg',
  authDomain: 'business-directory-45d54.firebaseapp.com',
  projectId: 'business-directory-45d54',
  storageBucket: 'business-directory-45d54.appspot.com',
  messagingSenderId: '1039872644941',
  appId: '1:1039872644941:web:c89629f6a8e8cae7bac904',
  measurementId: 'G-JYDM830P7N',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
// const analytics = getAnalytics(app)
