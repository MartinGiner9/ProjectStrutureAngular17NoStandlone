import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageComponent } from './demoPage.component';

describe('ReservationAvailabilityComponent', () => {
  let component: DemoPageComponent;
  let fixture: ComponentFixture<DemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
