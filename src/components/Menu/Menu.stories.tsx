import React from 'react';
import Menu from './Menu';

import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'components/Menu',
    component: Menu,
} as Meta;

export const LoaderComponent = (): React.ReactElement => <Menu />;
