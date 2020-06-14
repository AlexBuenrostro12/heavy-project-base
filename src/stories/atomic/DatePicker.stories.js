import React, { useState } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { DatePicker } from '../../components/atomic';

export default {
    title: 'DatePicker',
    component: DatePicker,
};

export const Default = () => {
    const [date, setDate] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
                disableToolbar
                disabled={false}
                error={false}
                required
                variant="dialog"
                label=""
                format="DD-MM-YYYY"
                value={date}
                onChange={(value) => setDate(new Date(value))}
            />
        </MuiPickersUtilsProvider>
    );
};
