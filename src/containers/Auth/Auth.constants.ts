import firebase from 'firebase';

export const ABOUT = 'ABOUT';
export const UI_CONFIG = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            fullLabel: 'LOG IN',
            buttonColor: '#131313',
        },
    ],
};
