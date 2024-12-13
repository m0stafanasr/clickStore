import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LayoutServiceService } from '../../shared/services/layout-service.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../shared/services/authentication-service.service';

@Component({
  selector: 'app-login',
  imports: [SharedModule, TranslatePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 , transform: 'translateY(-20px)' }),
        animate('1s ease-out', style({ opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
isArabic:boolean=false;
userName:string;
password:string;
err:string;
  constructor(private _translate:TranslateService, private layoutService:LayoutServiceService,
    private router:Router, private authService:AuthenticationServiceService
  ){}

  ngOnInit(): void {
      console.log(this._translate.currentLang);
      console.log(this.layoutService.getlang())
      this.isArabic= this._translate.currentLang =='ar';
  }

  changeLang(){
    
    console.log(this._translate.currentLang,'crnt')
    if(this._translate.currentLang==='ar'){
      console.log('english')
      this._translate.use('en')
      this.layoutService.setlang('en')
    }else{
      console.log('arabic')
      this._translate.use('ar')
      this.layoutService.setlang('ar')
    }
  }
  login(username:string, pass:string){
    
    this.err = ""
    let data =  Object.values(JSON.parse(localStorage.getItem('usersData') || '[]'));
    const dataArr =[]

    data.map(x=>{
      dataArr.push(x)
      console.log(x)
    })
    let user = dataArr.find(x => x.userName == username);
    console.log(user);
    
    if (!user) {
      this.err = "Notregistered";
       
    } else if(username == user.userName && pass!=user.password){
      this.err = "wrongPass"
       
    } else if(username == user.userName && pass==user.password){
      localStorage.setItem('userType',user.userType);
      
      this.router.navigate(['/home'])
    }

  }
}
