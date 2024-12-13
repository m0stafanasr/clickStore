import { ProductsService } from './../../services/products.service';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsResponse } from '../../models/products';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products-details-popup',
  imports: [MatIconModule, FormsModule, CommonModule, TranslateModule],
  templateUrl: './products-details-popup.component.html',
  styleUrl: './products-details-popup.component.scss'
})
export class ProductsDetailsPopupComponent implements OnInit {
  productId: number;
  selectedProduct:ProductsResponse = new ProductsResponse()
  constructor(@Inject(MAT_DIALOG_DATA) data:number, private ProductsService:ProductsService, private dialogRef:MatDialogRef<ProductsDetailsPopupComponent>){
    this.productId = data;
    // console.log(data)
  }

  ngOnInit(): void {
      this.ProductsService.getSpecificProduct(this.productId).subscribe(res=>{
        this.selectedProduct = res
      })
  }

  close(){
    this.dialogRef.close()
  }
}
