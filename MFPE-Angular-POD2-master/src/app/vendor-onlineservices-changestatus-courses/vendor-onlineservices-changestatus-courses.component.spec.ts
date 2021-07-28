import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOnlineservicesChangestatusCoursesComponent } from './vendor-onlineservices-changestatus-courses.component';

describe('VendorOnlineservicesChangestatusCoursesComponent', () => {
  let component: VendorOnlineservicesChangestatusCoursesComponent;
  let fixture: ComponentFixture<VendorOnlineservicesChangestatusCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOnlineservicesChangestatusCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOnlineservicesChangestatusCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
