import { ProductsService } from './../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ProductsResponse } from '../../models/products';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-edit-product',
  imports: [MatDialogModule, FormsModule, MatIconModule, TranslateModule, CommonModule],
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.scss'
})
export class AddEditProductComponent implements OnInit {
  product:ProductsResponse = new ProductsResponse();
  productId:number;
  categories:string[]=[]
  constructor(private ProductsService:ProductsService, private matdialogRef:MatDialogRef<AddEditProductComponent>,
   @Inject(MAT_DIALOG_DATA) data:number,private spinner:NgxSpinnerService){
  
    if(data){
      this.productId = data;

    }
   }
  

  ngOnInit(): void {
      this.getAllCategories()
      if(this.productId){
        this.ProductsService.getSpecificProduct(this.productId).subscribe(res=>{
          this.product =res;
          this.spinner.hide()
        })
      }
  }

  addNew(product:ProductsResponse){
    this.ProductsService.addNewProduct(product).subscribe(res=>{console.log(res)
      this.spinner.hide()
      if(res.id){
        this.matdialogRef.close('added')
      }
    })
  }

  getAllCategories(){
    this.ProductsService.getAllCategories().subscribe(res=>{ this.categories = res;
      console.log(this.categories)
      this.spinner.hide()
    })
  }

  close(){
    this.matdialogRef.close('notAdded')
  }
}
