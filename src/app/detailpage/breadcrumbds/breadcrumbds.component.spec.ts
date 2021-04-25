import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbdsComponent } from './breadcrumbds.component';

describe('BreadcrumbdsComponent', () => {
  let component: BreadcrumbdsComponent;
  let fixture: ComponentFixture<BreadcrumbdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
