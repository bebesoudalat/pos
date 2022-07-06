import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddSupplierComponent } from './popup-add-supplier.component';

describe('PopupAddSupplierComponent', () => {
  let component: PopupAddSupplierComponent;
  let fixture: ComponentFixture<PopupAddSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
