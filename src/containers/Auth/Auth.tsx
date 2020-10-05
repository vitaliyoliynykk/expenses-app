import React from 'react';
import './Auth.scss';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

class Auth extends React.Component {
    render(): React.ReactElement {
        return (
            <>
                <div className="container-auth">
                    <img src={Logo} alt="logo" />
                    <div className="container-auth__title">EXPENSES APP</div>
                    <button className="container-auth__btn container-auth__btn_log-in">LOG IN</button>
                    <Link to="/about" className="container-auth__btn container-auth__btn_about">
                        ABOUT
                    </Link>
                    <div className="container-auth__line" />
                </div>
            </>
        );
    }
}

export default Auth;
