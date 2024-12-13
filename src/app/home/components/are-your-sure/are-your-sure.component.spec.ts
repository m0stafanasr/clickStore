import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreYourSureComponent } from './are-your-sure.component';

describe('AreYourSureComponent', () => {
  let component: AreYourSureComponent;
  let fixture: ComponentFixture<AreYourSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreYourSureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreYourSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
