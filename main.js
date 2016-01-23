/**
 * Created by vadimdez on 23/01/16.
 */

import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import './styles/main.scss';
import React from 'react';
import {render} from 'react-dom';
import List from './components/list';

render(<List />, document.getElementById('app'));

