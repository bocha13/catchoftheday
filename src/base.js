import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
    apiKey: "AIzaSyCRLK97ShbIY14dOo67u8uZd5NOXAiMaSE",
    authDomain: "catch-of-the-day-680fb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-680fb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;