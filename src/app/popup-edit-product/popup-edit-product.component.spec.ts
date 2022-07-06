import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditProductComponent } from './popup-edit-product.component';

describe('PopupEditProductComponent', () => {
  let component: PopupEditProductComponent;
  let fixture: ComponentFixture<PopupEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
