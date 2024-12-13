import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from '../../services/products.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ProductsResponse } from '../../models/products';
import { SharedModule } from '../../../shared/shared.module';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { AreYourSureComponent } from '../are-your-sure/are-your-sure.component';

@Component({
  selector: 'app-admin-data',
  imports: [SharedModule,MatTableModule, MatPaginatorModule],
  templateUrl: './admin-data.component.html',
  styleUrl: './admin-data.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdminDataComponent implements OnInit, AfterViewInit {
 products: ProductsResponse[] = [];
  categories:string[]=[];
  displayedColumns:string[]= ['id', 'title', 'description', 'image', 'category', 'price', 'actions']
  currentCategory:string="";
  isArabic:boolean=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  dataSource = new MatTableDataSource<ProductsResponse>([]);

  constructor(private productsService:ProductsService, private dialog:MatDialog, private translateService:TranslateService,
    private spinner:NgxSpinnerService
  ){}

  ngOnInit(): void {
      this.getAllCategories();
      this.getAllProducts();
      // this.tableConstruction()
    this.isArabic = this.translateService.currentLang =='ar';
  
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getAllProducts(){
    this.productsService.getAllProducts().subscribe(res=>{this.products = res
      this.dataSource = new MatTableDataSource<ProductsResponse>(this.products)
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

  tableConstruction(){
    this.displayedColumns = ['id', 'title', 'description', 'image', 'category', 'price']

  }

  addNew(){
  let dialog=  this.dialog.open(AddEditProductComponent, { panelClass:this.isArabic?['rtl', 'overflow-hidden']:['ltr', 'overflow-hidden']})
    dialog.afterClosed().subscribe(res=>{
      console.log(res)
      if(res == 'true'){
        console.log('added')
        this.getAllProducts()
      }
    })

}

  edit(id){
    let dialog=  this.dialog.open(AddEditProductComponent, { panelClass:this.isArabic?['rtl', 'overflow-hidden']:['ltr', 'overflow-hidden'], data:id})
    dialog.afterClosed().subscribe(res=>{
      console.log(res)
      if(res == 'true'){
        console.log('added')
        this.getAllProducts()
      }
    })
  }

  deleteitem(id){
    this.dialog.open(AreYourSureComponent, { panelClass:this.isArabic?['rtl', 'overflow-hidden']:['ltr', 'overflow-hidden'],  data:id})
    this.productsService.deleteProduct(id).subscribe(res=>{
      this.spinner.hide()
      this.getAllProducts()
    })
  }
}
