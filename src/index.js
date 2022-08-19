import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.min.css';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from "./app/store";
import {DeviceProvider} from "./Device/DeviceContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <DeviceProvider>
            <App/>
        </DeviceProvider>
    </Provider>
);
