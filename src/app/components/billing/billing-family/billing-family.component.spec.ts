import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFamilyComponent } from './billing-family.component';

describe('BillingFamilyComponent', () => {
  let component: BillingFamilyComponent;
  let fixture: ComponentFixture<BillingFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
