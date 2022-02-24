import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingChildrenComponent } from './billing-children.component';

describe('BillingChildrenComponent', () => {
  let component: BillingChildrenComponent;
  let fixture: ComponentFixture<BillingChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
