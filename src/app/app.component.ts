import { Component, OnInit,Injectable, Inject,PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginType } from './shared/login-type';
import { TranslateService } from '@ngx-translate/core';
import { LayoutServiceService } from './shared/services/layout-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HTTPInterceptor } from './shared/services/httpinterceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule],
  providers:[ {
        provide: HTTP_INTERCEPTORS,
        useClass: HTTPInterceptor,
        multi: true
      }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'clickStore';
  userNames = {
   user: {userName:'user', password:'user', userType:LoginType.user},
    admin: {userName:'admin', password:'admin', userType:LoginType.admin},
 }
  hashedUsers:any[]=[];
  isArabic:boolean=false;
  private isBrowser:boolean;
  constructor(private translateService:TranslateService, private layoutService:LayoutServiceService,
    private spinner: NgxSpinnerService
  ){
    
  }
  
  ngOnInit(): void {
    this.layoutService.getlang();
    this.setUSersData()
    this.isArabic = this.translateService.currentLang=='ar'
    console.log(this.isArabic)
  }
  

  
  // setUSersData
  setUSersData(){
    // this.userNames.map(x=>{
    // let user = {username:x.userName,password:x.password, userType:x.userType }
    //   this.hashedUsers.push(user)
    // })
   localStorage.setItem('usersData', JSON.stringify(this.userNames))
  }
}
