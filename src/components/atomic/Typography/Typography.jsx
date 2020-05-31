import React from 'react';
import { Typography } from '@material-ui/core';
import Proptypes from 'prop-types';

import useStyles from './styles';

const classes = useStyles();

/**
 * Typography component
 * @param {ReactElement} children - Return any text between open and close tag
 * @param {String} variant - Prop with the variant of the component
 * @param {Object} styles - Styles for the component
 */

const TypographyComponent = ({ children, variant, styles }) => (
  <Typography style={[classes.typography, styles]} variant={variant}>
    {children}
  </Typography>
);

TypographyComponent.propTypes = {
  children: Proptypes.element,
  styles: Proptypes.objectOf(Proptypes.object),
  variant: Proptypes.string,
};

TypographyComponent.defaultProps = {
  children: null,
  styles: {},
  variant: '',
};

export default TypographyComponent;
