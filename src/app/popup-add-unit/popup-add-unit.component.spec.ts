import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddUnitComponent } from './popup-add-unit.component';

describe('PopupAddUnitComponent', () => {
  let component: PopupAddUnitComponent;
  let fixture: ComponentFixture<PopupAddUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
