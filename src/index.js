import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration';
import { SpeechProvider } from '@speechly/react-client';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <SpeechProvider
          appId="fa1681d6-1503-42d7-9871-c2bed46cc7c0"
          language="en-us"
        >
          <App />
        </SpeechProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
ServiceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
