import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbdComponent } from './breadcrumbd.component';

describe('BreadcrumbdComponent', () => {
  let component: BreadcrumbdComponent;
  let fixture: ComponentFixture<BreadcrumbdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
