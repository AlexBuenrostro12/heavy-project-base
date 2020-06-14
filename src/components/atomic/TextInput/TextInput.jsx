import React from 'react';
import { Input } from '@material-ui/core';
import Proptypes from 'prop-types';

/**
 * TextInput component
 * @param {object} styles - Styles for the component
 * @param {boolean} disabled - Prop that handle if the component is disabled or not
 * @param {boolean} error - Prop that handle if the component have an error
 * @param {boolean} required - Prop that handle if the component is required or not
 * @param {boolean} multiline - Prop that handle if the component is multiline
 * @param {string} type - Prop that handle the type it should be a valid HTML5 input type
 * @param {string} placeholder - Prop that have the placeholder
 * @param {any} value - Prop that have the value for the component
 * @function onChange - Function that handle the change of value
 */

const TextInput = (props) => {
    const {
        styles, disabled, error, required, multiline, type, placeholder, value, onChange,
    } = props;

    return (
        <Input
            style={styles}
            disabled={disabled}
            error={error}
            required={required}
            multiline={multiline}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

TextInput.propTypes = {
    styles: Proptypes.objectOf(Proptypes.object),
    disabled: Proptypes.bool,
    error: Proptypes.bool,
    required: Proptypes.bool,
    multiline: Proptypes.bool,
    type: Proptypes.string,
    placeholder: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
};

TextInput.defaultProps = {
    styles: {},
    disabled: false,
    error: false,
    required: false,
    multiline: false,
    type: 'text',
    placeholder: '',
    value: '',
    onChange: () => {},
};

export default TextInput;
