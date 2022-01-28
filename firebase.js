import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyfjgElfqwqMs5aVPyECu2oFVOui-kJ10",
    authDomain: "whatsapp-clone-7382d.firebaseapp.com",
    projectId: "whatsapp-clone-7382d",
    storageBucket: "whatsapp-clone-7382d.appspot.com",
    messagingSenderId: "544257629786",
    appId: "1:544257629786:web:e250e7326e5292642a0263",
    measurementId: "G-JGD0FNHPPD"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider }