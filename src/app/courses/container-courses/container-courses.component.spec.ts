import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCoursesComponent } from './container-courses.component';

describe('ContainerCoursesComponent', () => {
  let component: ContainerCoursesComponent;
  let fixture: ComponentFixture<ContainerCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
