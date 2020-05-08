export const environment = {
  production: true,
  firebase: {
    apiKey: `${process.env.FIREBASE_API_KEY}`,
    authDomain: 'anime-poc.firebaseapp.com',
    databaseURL: 'https://anime-poc.firebaseio.com',
    projectId: 'anime-poc',
    storageBucket: 'anime-poc.appspot.com',
    messagingSenderId: '564419430236',
    appId: '1:564419430236:web:91b931afe06360eb082399',
    measurementId: 'G-BCH6S18V61',
  },
};
