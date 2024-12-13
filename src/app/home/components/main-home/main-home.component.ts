import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthenticationServiceService } from '../../../shared/services/authentication-service.service';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-main-home',
  imports: [SharedModule, RouterModule, NavBarComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent implements OnInit {
  userType:string=""
  constructor(private authService:AuthenticationServiceService, private productsService:ProductsService){}

  ngOnInit(): void {
     this.userType= this.authService.checkUserType()
     console.log(this.userType)

  }


}
