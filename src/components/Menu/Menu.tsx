import React from 'react';
import './Menu.scss';
import Add from '../../assets/plus.svg';
import Chart from '../../assets/profits.svg';
import Dashboard from '../../assets/dashboard.svg';
import Settings from '../../assets/settings.svg';
import { MenuProps } from '../../models/models';

const Menu = ({ onActionClick }: MenuProps): React.ReactElement => {
    const handleClick = (action: string): void => {
        onActionClick(action);
    };

    return (
        <div className="container-menu">
            <img
                src={Dashboard}
                alt="dashboard"
                className="container-menu__img"
                onClick={(): void => handleClick('dashboard')}
            />
            <img src={Chart} alt="profits" className="container-menu__img" onClick={(): void => handleClick('chart')} />
            <img src={Add} alt="add" className="container-menu__img" onClick={(): void => handleClick('add')} />
            <img
                src={Settings}
                alt="settings"
                className="container-menu__img"
                onClick={(): void => handleClick('settings')}
            />
        </div>
    );
};

export default Menu;
