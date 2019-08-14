import React from 'react';
import GlobalStyles from 'styles/global';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { store, persistor } from 'store';

import Routes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
