import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSwitchComponent } from './new-switch.component';

describe('NewSwitchComponent', () => {
  let component: NewSwitchComponent;
  let fixture: ComponentFixture<NewSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
