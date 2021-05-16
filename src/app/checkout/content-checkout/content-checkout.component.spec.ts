import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCheckoutComponent } from './content-checkout.component';

describe('ContentCheckoutComponent', () => {
  let component: ContentCheckoutComponent;
  let fixture: ComponentFixture<ContentCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
