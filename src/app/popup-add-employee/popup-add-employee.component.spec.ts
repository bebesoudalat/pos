import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddEmployeeComponent } from './popup-add-employee.component';

describe('PopupAddEmployeeComponent', () => {
  let component: PopupAddEmployeeComponent;
  let fixture: ComponentFixture<PopupAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
