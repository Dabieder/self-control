import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrlWidgetComponent } from './srl-widget.component';

describe('SrlWidgetComponent', () => {
  let component: SrlWidgetComponent;
  let fixture: ComponentFixture<SrlWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrlWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrlWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
