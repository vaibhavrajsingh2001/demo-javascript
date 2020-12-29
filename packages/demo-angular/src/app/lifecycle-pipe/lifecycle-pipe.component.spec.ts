import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclePipeComponent } from './lifecycle-pipe.component';

describe('LifecyclePipeComponent', () => {
  let component: LifecyclePipeComponent;
  let fixture: ComponentFixture<LifecyclePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclePipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyclePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
