import { DefaultLangChangeEvent } from './../../node_modules/@ngx-translate/core/lib/translate.service.d';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTranslateService, TranslateCompiler, TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTPInterceptor } from './shared/services/httpinterceptor';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/','.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideAnimationsAsync(),
    provideHttpClient(),
    TranslateModule.forRoot({
      
        loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],},
        defaultLanguage:'ar',
      
    }).providers,
    TranslateService,
    TranslateStore,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPInterceptor,
      multi: true
    }
  
  ]
};
