import React from 'react';

import './UserInfo.scss';
import { UserInfoProps } from '../../models/models';

const UserInfo = ({ totalBalance, userPhotoUrl, userName }: UserInfoProps): React.ReactElement => {
    return (
        <div className="user-info-container">
            <div className="user-info-container__photo">
                <img src={userPhotoUrl} alt="user" />
            </div>
            <div className="user-info-container__data">
                <div className="user-info-container__name">
                    <p>HELLO {userName.toUpperCase()}</p>
                </div>
                <div className="user-info-container__stats">
                    <p>
                        Your total balance is
                        <span className="green"> {totalBalance}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
