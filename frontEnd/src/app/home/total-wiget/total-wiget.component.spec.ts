import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWigetComponent } from './total-wiget.component';

describe('TotalWigetComponent', () => {
  let component: TotalWigetComponent;
  let fixture: ComponentFixture<TotalWigetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalWigetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalWigetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
