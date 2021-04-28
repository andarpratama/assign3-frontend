import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailpageComponent } from './content-detailpage.component';

describe('ContentDetailpageComponent', () => {
  let component: ContentDetailpageComponent;
  let fixture: ComponentFixture<ContentDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
