import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGradeDialogComponent } from './new-grade-dialog.component';

describe('NewGradeDialogComponent', () => {
  let component: NewGradeDialogComponent;
  let fixture: ComponentFixture<NewGradeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGradeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGradeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
