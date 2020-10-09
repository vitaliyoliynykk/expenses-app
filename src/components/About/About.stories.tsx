import React from 'react';
import About from './About';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'components/About',
    component: About,
} as Meta;

export const AboutComponent = (): React.ReactElement => <About />;
