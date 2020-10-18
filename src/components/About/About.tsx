import React from 'react';
import './About.scss';
import BackToAuth from '../../assets/left-arrow.svg';
import GitHubLogo from '../../assets/github-logo.svg';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const About = (): React.ReactElement => {
    return (
        <div className="container-about">
            <div className="container-about__img">
                <Router>
                    <Link to="/auth">
                        <img src={BackToAuth} alt="comeback" />
                    </Link>
                </Router>
            </div>
            <div className="container-about__title">ABOUT</div>
            <div className="container-about__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo facere alias possimus odio, expedita
                obcaecati delectus. Necessitatibus quos perspiciatis quasi dolores voluptate vero, asperiores molestias
                facilis nesciunt pariatur nisi quibusdam!
            </div>
            <div className="container-about__footer">
                <a href="https://github.com/vitaliyoliynykk" className="container-about__footer_author">
                    /vitaliyoliynykk
                </a>
                <a href="https://github.com/leshihak" className="container-about__footer_author">
                    /leshihak
                </a>
            </div>
            <img src={GitHubLogo} alt="github-logo" />
            <div className="container-about__line"></div>
        </div>
    );
};

export default About;
