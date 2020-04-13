import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgTmpHourlyComponent } from './avg-tmp-hourly.component';

describe('AvgTmpHourlyComponent', () => {
  let component: AvgTmpHourlyComponent;
  let fixture: ComponentFixture<AvgTmpHourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgTmpHourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgTmpHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
