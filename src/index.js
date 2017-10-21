import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app.container';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
