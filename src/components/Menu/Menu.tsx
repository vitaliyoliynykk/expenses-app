import React from 'react';
import './Menu.scss';
import Add from '../../assets/plus.svg';
import Chart from '../../assets/profits.svg';
import Settings from '../../assets/settings.svg';

const Menu = (): React.ReactElement => {
    return (
        <div className="container-menu">
            <img src={Chart} alt="profits" className="container-menu__img" />
            <img src={Add} alt="add" className="container-menu__img" />
            <img src={Settings} alt="settings" className="container-menu__img" />
        </div>
    );
};

export default Menu;
