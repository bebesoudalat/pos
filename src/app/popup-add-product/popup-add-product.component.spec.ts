import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddProductComponent } from './popup-add-product.component';

describe('PopupAddProductComponent', () => {
  let component: PopupAddProductComponent;
  let fixture: ComponentFixture<PopupAddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
