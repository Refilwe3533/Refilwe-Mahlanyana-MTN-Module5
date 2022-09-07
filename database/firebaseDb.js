// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCDO7eM72bilxeWaQET1J1-f0M1GIRW1h4",
    authDomain: "reactnativefirebase-00000.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "rreact-native-2c17f",
    storageBucket: "react-native-2c17f.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:404337915610:android:9223d27aab3d3dd64b97e3"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;