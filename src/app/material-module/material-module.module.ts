import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import{MatIconModule} from '@angular/material/icon'
import{MatDialogModule} from '@angular/material/dialog'

const MaterialComponents=[
  MatSlideToggleModule,
  MatIconModule,
  MatDialogModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ], 
  exports:[
    MaterialComponents
  ]
})
export class MaterialModuleModule { }
