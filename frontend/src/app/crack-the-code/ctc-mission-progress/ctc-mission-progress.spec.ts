import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtcMissionProgress } from './ctc-mission-progress';

describe('CtcMissionProgress', () => {
  let component: CtcMissionProgress;
  let fixture: ComponentFixture<CtcMissionProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtcMissionProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtcMissionProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
