// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCLN7bY4eojTcGFhHuC7gOHBbysOFYjF4w',
    authDomain: 'tech4covid19-telementoring.firebaseapp.com',
    databaseURL: 'https://tech4covid19-telementoring.firebaseio.com',
    projectId: 'tech4covid19-telementoring',
    storageBucket: 'tech4covid19-telementoring.appspot.com',
    messagingSenderId: '956804741314',
    appId: '1:956804741314:web:0001e1bc9eae3e3410635b',
    measurementId: 'G-K694CC7W1L'
  },
  webRTCConfig: {
    signalingServerAddress: 'ws://localhost:3000/ws'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
