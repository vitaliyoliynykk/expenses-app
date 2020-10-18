import React from 'react';

import { Meta } from '@storybook/react/types-6-0';
import UserInfo from './UserInfo';
import { UserInfoProps } from '../../models/models';

export default {
    title: 'components/UserInfo',
    component: UserInfo,
} as Meta;

const props: UserInfoProps = {
    totalBalance: 35000,
    userPhotoUrl: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg',
    userName: 'Vitalii',
};

export const UserInfoMain = (): React.ReactElement => <UserInfo {...props} />;
