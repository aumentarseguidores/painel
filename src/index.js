import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { unregister } from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/vendor/nucleo/css/nucleo.css"
import "./assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
import "./assets/css/argon.min.css"

import App from './App'
//import { PersistGate } from 'redux-persist/integration/react'

import { IntlProvider } from './languages/wrapper'

ReactDOM.render(
  <IntlProvider >
    <Provider store={ store } >
      <App />
    </Provider>
  </IntlProvider>

, document.getElementById('root'));

unregister()

/*
<PersistGate loading={<LoadingMessage />} persistor={persistor} >
  <App />
</PersistGate>
*/
