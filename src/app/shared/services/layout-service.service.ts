import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {
  isBrowser: boolean;
  defaultLang:string="ar"
  constructor(private _translate:TranslateService,@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

   setlang(lang) {
      if(this.isBrowser ){
        
      localStorage.setItem('lang', lang);
      this._translate.setDefaultLang(lang);
      this._translate.use(lang);
      window.location.reload();
    }
  }
   getlang()  {
    
    if(this.isBrowser){
    if(localStorage.getItem('lang')){
      console.log(JSON.stringify(localStorage.getItem('lang')))
      let lang = localStorage.getItem('lang')
      console.log(lang, 'returned')
      this._translate.use(lang)
      return lang
    }else{
      this.setlang(this.defaultLang)
      return this._translate.currentLang
    }
  } else{
    return ''
  }
}
  isRTL() : boolean {
    
    return JSON.stringify(localStorage.getItem('lang')) == 'ar'
  }
}
