import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyADD4Z51xRzI1nWMC0hfP8W6IUNaCMEhQs',
    authDomain: 'chatapp-81f14.firebaseapp.com',
    databaseURL: 'https://chatapp-81f14.firebaseio.com',
    projectId: 'chatapp-81f14',
    storageBucket: 'chatapp-81f14.appspot.com',
    messagingSenderId: '30449396221'
};

firebase.initalizeApp(config);

export default firebase;
