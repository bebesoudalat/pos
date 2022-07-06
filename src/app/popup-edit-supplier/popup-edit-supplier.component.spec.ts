import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditSupplierComponent } from './popup-edit-supplier.component';

describe('PopupEditSupplierComponent', () => {
  let component: PopupEditSupplierComponent;
  let fixture: ComponentFixture<PopupEditSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
