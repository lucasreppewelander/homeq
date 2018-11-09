import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './main.css';
import '../assets/template.html';

import store from './store';
import Application from './Application';

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById('application')
);
