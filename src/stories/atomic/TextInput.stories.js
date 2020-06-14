import React, { useState } from 'react';
import { TextInput } from '../../components/atomic';

export default {
    title: 'TextInput',
    component: TextInput,
};

export const Default = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled={false}
            error={false}
            required
            multiline={false}
            type="text"
            placeholder="Default"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Number = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled={false}
            error={false}
            required
            multiline={false}
            type="number"
            placeholder="3411381787"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Password = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled={false}
            error={false}
            required
            multiline={false}
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Multiline = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled={false}
            error={false}
            required
            multiline
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Error = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled={false}
            error
            required={false}
            multiline={false}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export const Disabled = () => {
    const [value, setValue] = useState('');

    return (
        <TextInput
            style={{}}
            disabled
            error={false}
            required={false}
            multiline={false}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};
