import * as firebase from 'firebase';

//-Firebase---------------------------------------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB7DdCYWWF1hghR6G8tdLCTMT12L86rLds",
    authDomain: "tcdpastpapers.firebaseapp.com",
    databaseURL: "https://tcdpastpapers.firebaseio.com",
    storageBucket: "tcdpastpapers.appspot.com",
};
firebase.initializeApp(firebaseConfig);
global.db = firebase.database();
