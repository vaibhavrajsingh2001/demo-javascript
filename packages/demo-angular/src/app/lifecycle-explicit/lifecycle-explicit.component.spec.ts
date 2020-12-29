import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleExplicitComponent } from './lifecycle-explicit.component';

describe('LifecycleExplicitComponent', () => {
  let component: LifecycleExplicitComponent;
  let fixture: ComponentFixture<LifecycleExplicitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleExplicitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
