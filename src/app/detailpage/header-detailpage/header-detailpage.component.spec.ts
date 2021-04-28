import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDetailpageComponent } from './header-detailpage.component';

describe('HeaderDetailpageComponent', () => {
  let component: HeaderDetailpageComponent;
  let fixture: ComponentFixture<HeaderDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
