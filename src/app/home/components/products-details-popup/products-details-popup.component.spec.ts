import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsPopupComponent } from './products-details-popup.component';

describe('ProductsDetailsPopupComponent', () => {
  let component: ProductsDetailsPopupComponent;
  let fixture: ComponentFixture<ProductsDetailsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDetailsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetailsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
