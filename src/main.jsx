import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import './assets/main.scss'

import { I18nextProvider } from 'react-i18next';
import i18n from './constants/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18n}>
  <App />
</I18nextProvider>
//  </React.StrictMode>,

)
