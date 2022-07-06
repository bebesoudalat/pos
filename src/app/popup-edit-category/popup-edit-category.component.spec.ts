import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditCategoryComponent } from './popup-edit-category.component';

describe('PopupEditCategoryComponent', () => {
  let component: PopupEditCategoryComponent;
  let fixture: ComponentFixture<PopupEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
