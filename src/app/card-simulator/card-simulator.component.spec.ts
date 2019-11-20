import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimulatorComponent } from './card-simulator.component';

describe('CardSimulatorComponent', () => {
  let component: CardSimulatorComponent;
  let fixture: ComponentFixture<CardSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
