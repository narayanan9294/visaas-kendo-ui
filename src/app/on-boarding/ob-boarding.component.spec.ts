import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObBoardingComponent } from './ob-boarding.component';

describe('ObBoardingComponent', () => {
  let component: ObBoardingComponent;
  let fixture: ComponentFixture<ObBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObBoardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
