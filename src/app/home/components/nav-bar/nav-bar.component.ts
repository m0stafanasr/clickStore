import { AuthenticationServiceService } from './../../../shared/services/authentication-service.service';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { LayoutServiceService } from '../../../shared/services/layout-service.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [SharedModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  constructor(private _translate:TranslateService, private layoutService:LayoutServiceService,
     private AuthService:AuthenticationServiceService, private router:Router){}

  changeLang(){
    if(this._translate.currentLang==='ar'){
  
      this._translate.use('en')
      this.layoutService.setlang('en')
    }else{
   
      this._translate.use('ar')
      this.layoutService.setlang('ar')
    }
  }
  logout(){
    this.AuthService.logout();
    this.router.navigate(['/login'])
  }
}
