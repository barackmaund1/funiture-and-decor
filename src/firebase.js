import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyBBPOwHaPtj6NApeo5K8Bt8medlhi91cV4",
  authDomain: "furniture-decor-star.firebaseapp.com",
  databaseURL: "https://furniture-decor-star.firebaseio.com",
  projectId: "furniture-decor-star",
  storageBucket: "furniture-decor-star.appspot.com",
  messagingSenderId: "345137154160",
  appId: "1:345137154160:web:27256d2bdb890588e24cb5",
  measurementId: "G-W30QE8XYWJ",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };