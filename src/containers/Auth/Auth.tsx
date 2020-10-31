import React from 'react';
import './Auth.scss';
import Logo from '../../assets/logo.svg';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { AuthContext } from './AuthProvider';
import { ABOUT } from './Auth.constants';

const uiConfig = {
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

class Auth extends React.Component<RouteComponentProps> {
    static contextType = AuthContext;

    private onClickAboutPage = (): void => {
        this.props.history.push('/about');
    };

    render(): React.ReactElement {
        return (
            <div className="container-auth">
                <img src={Logo} alt="logo" />
                <div className="container-auth__title">EXPENSES APP</div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                <div className="container-auth__about" onClick={this.onClickAboutPage}>
                    {ABOUT}
                </div>
                <div className="container-auth__line" />
            </div>
        );
    }
}

export default withRouter(Auth);
