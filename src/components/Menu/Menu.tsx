import React from 'react';
import './Menu.scss';
import Add from '../../assets/plus.svg';
import Chart from '../../assets/profits.svg';
import Category from '../../assets/category.svg';
import Settings from '../../assets/settings.svg';
import { useHistory } from 'react-router-dom';

const Menu = (): React.ReactElement => {
    const history = useHistory();

    const handleClick = (action: string): void => {
        switch (action) {
            case 'chart':
                history.push('/chart');
                break;
            case 'add':
                history.push('/add');
                break;
            case 'category':
                history.push('/category');
                break;
            case 'settings':
                history.push('/settings');
                break;
            default:
                break;
        }
    };

    return (
        <div className="container-menu">
            <img src={Chart} alt="profits" className="container-menu__img" onClick={(): void => handleClick('chart')} />
            <img src={Add} alt="add" className="container-menu__img" onClick={(): void => handleClick('add')} />
            <img
                src={Category}
                alt="category"
                className="container-menu__img"
                onClick={(): void => handleClick('category')}
            />
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
