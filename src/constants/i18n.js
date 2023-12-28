import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esAr from '../lang/es_AR.json';
import enUS from '../lang/en_US.json';

// import esMx from '../lang/es_MX.json';

// const language = window.navigator.userLanguage || window.navigator.language;

i18n.use(initReactI18next).init({
    resources: {
      'es-AR': {
        translation: esAr,
      },
    },
  
  fallbackLng: 'es-AR',
  lng: window.navigator.userLanguage || window.navigator.language,
  contextSeparator: '&',
});

export default i18n;