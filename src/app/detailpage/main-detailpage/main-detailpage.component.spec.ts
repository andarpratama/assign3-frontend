import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDetailpageComponent } from './main-detailpage.component';

describe('MainDetailpageComponent', () => {
  let component: MainDetailpageComponent;
  let fixture: ComponentFixture<MainDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
