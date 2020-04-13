import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgTempComponent } from './avg-temp.component';

describe('AvgTempComponent', () => {
  let component: AvgTempComponent;
  let fixture: ComponentFixture<AvgTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
