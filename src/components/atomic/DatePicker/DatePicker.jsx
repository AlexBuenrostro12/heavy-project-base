import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Proptypes from 'prop-types';

/**
 * DatePicker component
 * @param {object} props - Object with the props for the component
 * @param {boolean} props.disableToolbar - Prop that disable the toolbar
 * @param {string} props.variant - Variant for the compoenent
 * @param {string} props.label - Label for the component
 * @param {string} props.format - Format for the component
 * @param {string} props.value - Value for the component
 * @function props.onChange - Function that handle the onChange event of the component
 */

const DatePicker = (props) => {
    const {
        disableToolbar, disabled, error, required, variant, label, format, value, onChange,
    } = props;

    return (
        <KeyboardDatePicker
            disableToolbar={disableToolbar}
            disabled={disabled}
            error={error}
            required={required}
            variant={variant}
            label={label}
            format={format}
            value={value}
            onChange={onChange}
        />
    );
};

DatePicker.propTypes = {
    disableToolbar: Proptypes.bool,
    disabled: Proptypes.bool,
    error: Proptypes.bool,
    required: Proptypes.bool,
    variant: Proptypes.string,
    label: Proptypes.string,
    format: Proptypes.string,
    value: Proptypes.string,
    onChange: Proptypes.func,
};

DatePicker.defaultProps = {
    disableToolbar: true,
    disabled: false,
    error: false,
    required: false,
    variant: 'inline',
    label: 'Date picker dialog',
    format: 'MM/dd/yyyy',
    value: '',
    onChange: () => {},
};

export default DatePicker;
