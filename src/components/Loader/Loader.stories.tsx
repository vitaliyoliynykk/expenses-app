import React from 'react';
import Loader from './Loader';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'components/Loader',
    component: Loader,
} as Meta;

export const LoaderComponent = (): React.ReactElement => <Loader />;
