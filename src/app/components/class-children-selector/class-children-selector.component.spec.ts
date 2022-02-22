import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassChildrenSelectorComponent } from './class-children-selector.component';

describe('ClassChildrenSelectorComponent', () => {
  let component: ClassChildrenSelectorComponent;
  let fixture: ComponentFixture<ClassChildrenSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassChildrenSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassChildrenSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
