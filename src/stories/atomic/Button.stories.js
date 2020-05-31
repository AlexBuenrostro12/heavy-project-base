import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../components/atomic';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button>
    Default
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary">
    Secondary
  </Button>
);

export const OnClick = () => (
  <Button onClick={action('clicked')}>
    OnClick
  </Button>
);
