// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDtaXBCudtgSofB8hlqgf2a-0twmVWYzqQ',
    authDomain: 'react-mileage-tracker.firebaseapp.com',
    databaseURL: 'https://react-mileage-tracker.firebaseio.com',
    projectId: 'react-mileage-tracker',
    storageBucket: 'react-mileage-tracker.appspot.com',
    messagingSenderId: '151784871041'
  }
};
