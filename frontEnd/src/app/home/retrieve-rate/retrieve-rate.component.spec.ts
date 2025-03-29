import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveRateComponent } from './retrieve-rate.component';

describe('RetrieveRateComponent', () => {
  let component: RetrieveRateComponent;
  let fixture: ComponentFixture<RetrieveRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetrieveRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
