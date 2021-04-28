import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDetailpageComponent } from './preview-detailpage.component';

describe('PreviewDetailpageComponent', () => {
  let component: PreviewDetailpageComponent;
  let fixture: ComponentFixture<PreviewDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
