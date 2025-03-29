import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxWidgetComponent } from './max-widget.component';

describe('MaxWidgetComponent', () => {
  let component: MaxWidgetComponent;
  let fixture: ComponentFixture<MaxWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
