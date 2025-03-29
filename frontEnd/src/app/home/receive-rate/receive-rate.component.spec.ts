import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveRateComponent } from './receive-rate.component';

describe('ReceiveRateComponent', () => {
  let component: ReceiveRateComponent;
  let fixture: ComponentFixture<ReceiveRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
