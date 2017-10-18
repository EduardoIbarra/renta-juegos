// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCf6tBQwREL6ousPPeD8QUEZoh-kLF41rM',
        authDomain: 'renta-juegos.firebaseapp.com',
        databaseURL: 'https://renta-juegos.firebaseio.com',
        projectId: 'renta-juegos',
        storageBucket: 'renta-juegos.appspot.com',
        messagingSenderId: '1047444709976'
    }
};
