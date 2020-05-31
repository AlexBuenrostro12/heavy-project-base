import React from 'react';
import { Button } from '@material-ui/core';
import Proptypes from 'prop-types';

/**
 * Button component
 * @param {ReactElement} children - Return any text between open and close tag
 * @param {String} variant - Prop with the variant of the component
 * @param {Object} styles - Styles for the component
 * @param {String} color - Prop that contain the color for the button
 * @param {String} component - Prop with the name of the component for the button
 * @param {String} size - Prop with size fot the button
 * @param {Boolean} disabled - Prop that handle if the component its disabled or not
 */

const ButtonComponent = ({
  children, variant, color, styles, component, size, disabled,
}) => (
  <Button
    style={styles}
    variant={variant}
    color={color}
    component={component}
    size={size}
    disabled={disabled}

  >
    {children}
  </Button>
);

ButtonComponent.propTypes = {
  children: Proptypes.element,
  styles: Proptypes.objectOf(Proptypes.object),
  variant: Proptypes.string,
  color: Proptypes.string,
  component: Proptypes.string,
  size: Proptypes.string,
  disabled: Proptypes.bool,
};

ButtonComponent.defaultProps = {
  children: null,
  styles: {},
  variant: 'contained',
  color: 'primary',
  component: 'span',
  size: 'small',
  disabled: false,
};

export default ButtonComponent;
