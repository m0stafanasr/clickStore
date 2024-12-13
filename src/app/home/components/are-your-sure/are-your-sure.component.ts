import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-are-your-sure',
  imports: [MatDialogModule, FormsModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './are-your-sure.component.html',
  styleUrl: './are-your-sure.component.scss'
})
export class AreYourSureComponent implements OnInit {

  constructor(private ProductsService:ProductsService, private matDialogRef:MatDialogRef<AreYourSureComponent>,
         @Inject(MAT_DIALOG_DATA) data:number,private spinner:NgxSpinnerService) {}

  ngOnInit(): void {
      
  }

  deleteitem(id){
    
    this.ProductsService.deleteProduct(id).subscribe(res=>{
      this.spinner.hide()
      if(res){
        this.matDialogRef.close()
      }
    })
  
  }

  close(){
    this.matDialogRef.close()
  }
}
