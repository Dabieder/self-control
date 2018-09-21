import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaySelectionComponent } from './weekday-selection.component';

describe('WeekdaySelectionComponent', () => {
  let component: WeekdaySelectionComponent;
  let fixture: ComponentFixture<WeekdaySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekdaySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
