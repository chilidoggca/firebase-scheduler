// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAe3Vzdkx-1q13t29h1GU97h1gmU1zJFl4",
    authDomain: "ng-scheduler.firebaseapp.com",
    databaseURL: "https://ng-scheduler.firebaseio.com",
    projectId: "ng-scheduler",
    storageBucket: "ng-scheduler.appspot.com",
    messagingSenderId: "10946027859"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
