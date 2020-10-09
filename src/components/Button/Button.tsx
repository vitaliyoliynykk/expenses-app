import React from 'react';
import { ButtonProps } from '../../models/models';
import './Button.scss';

const Button = ({ title }: ButtonProps): React.ReactElement => {
    return <div className="container__btn">{title}</div>;
};

export default Button;
