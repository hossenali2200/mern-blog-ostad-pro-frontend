import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider>
      <App />
      </ThemeProvider>
     
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

