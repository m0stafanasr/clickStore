import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTPInterceptor } from './services/httpinterceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    HttpClientModule,
    NgxSpinnerModule,
    // MaterialModuleModule
  ],
   exports: [CommonModule,MaterialModuleModule, TranslateModule, FormsModule, NgxSpinnerModule,]
,providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HTTPInterceptor,
    multi: true, // Allow multiple interceptors
  },
],
  })
export class SharedModule { }
