import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderNewproductComponent } from './add-order-newproduct.component';

describe('AddOrderNewproductComponent', () => {
  let component: AddOrderNewproductComponent;
  let fixture: ComponentFixture<AddOrderNewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderNewproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderNewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
