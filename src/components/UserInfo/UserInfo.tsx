import React from 'react';

import './UserInfo.scss';
import { UserInfoProps } from '../../models/models';

const UserInfo = ({ totalBalance }: UserInfoProps): React.ReactElement => {
    return (
        <div className="user-info-container">
            <div className="user-info-container__photo">
                <img src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" alt="user" />
            </div>
            <div className="user-info-container__data">
                <div className="user-info-container__name">
                    <p>HELLO VITALII</p>
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
