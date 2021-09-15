import {TranslateLoader} from "@ngx-translate/core";
import {createTranslateLoader} from "../app/app.module";
import {HttpClient} from "@angular/common/http";

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAmSoBTNVBoIwrLMX1LBIgKlljS98BvLp0",
    authDomain: "finance-manage-56b7f.firebaseapp.com",
    projectId: "finance-manage-56b7f",
    storageBucket: "finance-manage-56b7f.appspot.com",
    messagingSenderId: "157886390525",
    appId: "1:157886390525:web:d0e20ea04daf373328de94"
  },
  languages: [
    {
      code: 'en',
      name: 'english',
      iconUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
    }, {
      code: 'ua',
      name: 'ukraine',
      iconUrl: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg'
    }
  ],
  translate: {
    defaultLanguage: 'en',
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }
};
