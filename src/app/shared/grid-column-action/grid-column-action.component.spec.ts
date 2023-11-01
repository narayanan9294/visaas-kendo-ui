import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColumnActionComponent } from './grid-column-action.component';

describe('GridColumnActionComponent', () => {
  let component: GridColumnActionComponent;
  let fixture: ComponentFixture<GridColumnActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridColumnActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridColumnActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
