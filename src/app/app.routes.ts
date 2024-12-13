import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'home', canActivate:[AuthGuard], loadChildren:()=>import('./home/home.module').then(h=>h.HomeModule)}
];
