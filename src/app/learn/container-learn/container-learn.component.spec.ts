import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLearnComponent } from './container-learn.component';

describe('ContainerLearnComponent', () => {
  let component: ContainerLearnComponent;
  let fixture: ComponentFixture<ContainerLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
