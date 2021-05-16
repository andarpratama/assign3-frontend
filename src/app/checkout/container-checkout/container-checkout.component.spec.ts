import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCheckoutComponent } from './container-checkout.component';

describe('ContainerCheckoutComponent', () => {
  let component: ContainerCheckoutComponent;
  let fixture: ComponentFixture<ContainerCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
