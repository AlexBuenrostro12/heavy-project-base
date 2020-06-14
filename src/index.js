import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <App />
        </MuiPickersUtilsProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
