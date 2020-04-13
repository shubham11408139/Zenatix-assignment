import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTempComponent } from './live-temp.component';

describe('LiveTempComponent', () => {
  let component: LiveTempComponent;
  let fixture: ComponentFixture<LiveTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
