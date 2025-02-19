import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderManagementComponent } from './calender-management.component';

describe('CalenderManagementComponent', () => {
  let component: CalenderManagementComponent;
  let fixture: ComponentFixture<CalenderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
