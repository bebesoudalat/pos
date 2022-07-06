import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSalePopupComponent } from './confirm-sale-popup.component';

describe('ConfirmSalePopupComponent', () => {
  let component: ConfirmSalePopupComponent;
  let fixture: ComponentFixture<ConfirmSalePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmSalePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSalePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
