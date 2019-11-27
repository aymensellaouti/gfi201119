import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSimulatorComponent } from './router-simulator.component';

describe('RouterSimulatorComponent', () => {
  let component: RouterSimulatorComponent;
  let fixture: ComponentFixture<RouterSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
