import React from 'react';
import './Auth.scss';
import Logo from '../../assets/logo.svg';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withRouter } from 'react-router-dom';
import firebase, { User } from 'firebase';
import { AuthContext } from './AuthProvider';
import { ABOUT, UI_CONFIG } from './Auth.constants';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { Dispatch } from '@reduxjs/toolkit';
import { AuthProps } from '../../models/models';
import app from '../../base.js';
import { PayloadAction } from 'typesafe-actions';
import { AuthAction } from './store/reducer';

class Auth extends React.Component<AuthProps> {
    static contextType = AuthContext;

    private onClickAboutPage = (): void => {
        this.props.history.push('/about');
    };

    public componentDidMount(): void {
        app.auth().onAuthStateChanged((user) => this.props.userSignedIn(user));
    }

    render(): React.ReactElement {
        return (
            <div className="container-auth">
                <img src={Logo} alt="logo" />
                <div className="container-auth__title">EXPENSES APP</div>
                <StyledFirebaseAuth uiConfig={UI_CONFIG} firebaseAuth={firebase.auth()} />
                <div className="container-auth__about" onClick={this.onClickAboutPage}>
                    {ABOUT}
                </div>
                <div className="container-auth__line" />
            </div>
        );
    }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
const mapDispatchToProps = (dispatch: Dispatch<AuthAction>): any => {
    return {
        userSignedIn: (user: User): PayloadAction<string, any> => dispatch(actions.userSignedIn(user)),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(Auth));
