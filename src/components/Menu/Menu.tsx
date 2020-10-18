import React from 'react';
import './Menu.scss';
import Add from '../../assets/plus.svg';
import Chart from '../../assets/profits.svg';
import Settings from '../../assets/settings.svg';
import { MenuProps } from '../../models/models';

const Menu = ({ handleClickOnChart, handleClickOnAdd, handleClickOnSettings }: MenuProps): React.ReactElement => {
    return (
        <div className="container-menu">
            <img src={Chart} alt="profits" className="container-menu__img" onClick={handleClickOnChart} />
            <img src={Add} alt="add" className="container-menu__img" onClick={handleClickOnAdd} />
            <img src={Settings} alt="settings" className="container-menu__img" onClick={handleClickOnSettings} />
        </div>
    );
};

export default Menu;
