import Firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyChM9VTAB5f8tZO-YF8Hdzbpjx68iIu320",
    authDomain: "quero-pechinchar.firebaseapp.com",
    databaseURL: "https://quero-pechinchar.firebaseio.com",
    projectId: "quero-pechinchar",
    storageBucket: "quero-pechinchar.appspot.com",
    messagingSenderId: "104608782194",
    appId: "1:104608782194:web:6d6abb13572d07de38efeb",
    measurementId: "G-HPBF7LYD5C"
};

Firebase.initializeApp(firebaseConfig);
// Firebase.firestore().settings({ timestampsInSnapshots: true })

export default Firebase; 