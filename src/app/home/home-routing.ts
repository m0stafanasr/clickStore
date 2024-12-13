import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { roleGuardGuard } from '../guards/role-guard.guard';
import { AdminDataComponent } from './components/admin-data/admin-data.component';

export const routes: Routes = [
    {path:'', component:MainHomeComponent,
        children:[
            {path:'',redirectTo:'products', pathMatch:'full'},
            {path:'products', canActivate:[roleGuardGuard], component: ProductsListComponent},
            {path:'admin-data', component:AdminDataComponent}
        ]
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class homeRoutingModule { }
  
  
  