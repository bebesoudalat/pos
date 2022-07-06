import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditUnitComponent } from './popup-edit-unit.component';

describe('PopupEditUnitComponent', () => {
  let component: PopupEditUnitComponent;
  let fixture: ComponentFixture<PopupEditUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
