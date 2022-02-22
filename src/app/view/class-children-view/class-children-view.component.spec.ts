import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChildrenViewComponent } from './class-children-view.component';

describe('ClassChildrenViewComponent', () => {
  let component: ClassChildrenViewComponent;
  let fixture: ComponentFixture<ClassChildrenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassChildrenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassChildrenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
