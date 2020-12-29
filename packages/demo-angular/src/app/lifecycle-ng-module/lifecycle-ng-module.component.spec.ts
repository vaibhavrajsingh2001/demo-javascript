import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleNgModuleComponent } from './lifecycle-ng-module.component';

describe('LifecycleNgModuleComponent', () => {
  let component: LifecycleNgModuleComponent;
  let fixture: ComponentFixture<LifecycleNgModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleNgModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleNgModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
