import React from 'react';
import GlobalStyles from 'styles/global';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { store, persistor } from 'store';

import Routes from 'routes';

function App() {
  console.log(process.env);
  console.log('REACT_APP_SECRET_CODE: ', process.env.REACT_APP_SECRET_CODE);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
