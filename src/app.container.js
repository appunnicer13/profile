import React from 'react'
import { Provider } from 'react-redux'
import store from './app.store';
import App from './app'


const AppContainer = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
);

export default AppContainer;