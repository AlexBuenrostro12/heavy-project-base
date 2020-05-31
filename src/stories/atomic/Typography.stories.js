import React from 'react';
import { Typography } from '../../components/atomic';

export default {
  title: 'Typography',
  component: Typography,
};

export const h1 = () => (
  <Typography variant="h1">
    hello h1
  </Typography>
);

export const h2 = () => (
  <Typography variant="h2">
    hello h2
  </Typography>
);
