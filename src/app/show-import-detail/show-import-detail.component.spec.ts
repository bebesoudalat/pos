import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImportDetailComponent } from './show-import-detail.component';

describe('ShowImportDetailComponent', () => {
  let component: ShowImportDetailComponent;
  let fixture: ComponentFixture<ShowImportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowImportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowImportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
