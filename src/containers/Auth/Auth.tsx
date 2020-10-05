import React from 'react';
import './Auth.scss';
import Logo from '../../assets/logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { LOG_IN } from './Auth.constants';

class Auth extends React.Component {
    render(): React.ReactElement {
        return (
            <div className="container-auth">
                <img src={Logo} alt="logo" />
                <div className="container-auth__title">EXPENSES APP</div>
                <Button title={LOG_IN} />
                <Router>
                    <Link to="/about" className="container-auth__link">
                        ABOUT
                    </Link>
                </Router>
                <div className="container-auth__line" />
            </div>
        );
    }
}

export default Auth;
