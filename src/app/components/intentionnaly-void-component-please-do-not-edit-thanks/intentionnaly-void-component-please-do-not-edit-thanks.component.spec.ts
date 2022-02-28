import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentionnalyVoidComponentPleaseDoNotEditThanksComponent } from './intentionnaly-void-component-please-do-not-edit-thanks.component';

describe('IntentionnalyVoidComponentPleaseDoNotEditThanksComponent', () => {
  let component: IntentionnalyVoidComponentPleaseDoNotEditThanksComponent;
  let fixture: ComponentFixture<IntentionnalyVoidComponentPleaseDoNotEditThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntentionnalyVoidComponentPleaseDoNotEditThanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntentionnalyVoidComponentPleaseDoNotEditThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
