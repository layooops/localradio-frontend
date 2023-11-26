const appConfig = {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Local Radio!',
        'Auth.form.welcome.subtitle': 'Log in to Local Radio',
        'app.components.LeftMenu.navbrand.title': 'Local Radio Workplace',
      },
    },
  },
  bootstrap() {
    document.title = 'Local Radio';
  },
};

export default appConfig;
