import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsResponse } from '../../models/products';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductsDetailsPopupComponent } from '../products-details-popup/products-details-popup.component';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products-list',
  imports: [SharedModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  products: ProductsResponse[] = [];
  categories:string[]=[];
  searchText:string="";
  currentCategory:string="";
  isArabic:boolean=false;
  constructor(private productsService:ProductsService, private dialog:MatDialog, private translateService:TranslateService,
    private spinner:NgxSpinnerService
  ){}

  ngOnInit(): void {
      this.getAllCategories();
      this.getAllProducts();
    this.isArabic = this.translateService.currentLang =='ar';
  
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res=>{this.products = res
      this.spinner.hide()
    })
  }
  getAllCategories(){
    this.productsService.getAllCategories().subscribe(res=>{ this.categories = res;
      console.log(this.categories)
      this.spinner.hide()
    })
  }

  getCategory(category){
    this.currentCategory = category
    this.productsService.getByCategory(category).subscribe(res=>{this.products = res
      this.spinner.hide()
    })
  }

  showProduct(id:number){
    this.dialog.open(ProductsDetailsPopupComponent, {panelClass:this.isArabic?'rtl':'ltr', data:id, width:'50%'})
  }

  searchBy(products:ProductsResponse[],text:string){
    this.spinner.show()
    this.products = []

    products.map(x=>{
      if(x.title.toLowerCase().includes(text.toLowerCase())){
        this.products.push(x)
      }
    })
    console.log(this.products)
    this.spinner.hide()
    if(text==""){
      this.getAllProducts()
    }
  }
}
