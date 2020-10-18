import React from 'react';
import Button from './Button';
import { Meta } from '@storybook/react/types-6-0';

export default {
    title: 'components/Button',
    component: Button,
} as Meta;

export const LogInButton = (): React.ReactElement => <Button title="LOG IN" />;
