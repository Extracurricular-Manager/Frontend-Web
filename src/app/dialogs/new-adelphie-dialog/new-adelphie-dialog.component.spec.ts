import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdelphieDialogComponent } from './new-adelphie-dialog.component';

describe('NewAdelphieDialogComponent', () => {
  let component: NewAdelphieDialogComponent;
  let fixture: ComponentFixture<NewAdelphieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAdelphieDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdelphieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
