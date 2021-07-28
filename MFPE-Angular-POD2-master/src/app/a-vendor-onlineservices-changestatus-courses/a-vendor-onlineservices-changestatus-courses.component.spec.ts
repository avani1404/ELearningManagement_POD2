import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorOnlineservicesChangestatusCoursesComponent } from './a-vendor-onlineservices-changestatus-courses.component';

describe('AVendorOnlineservicesChangestatusCoursesComponent', () => {
  let component: AVendorOnlineservicesChangestatusCoursesComponent;
  let fixture: ComponentFixture<AVendorOnlineservicesChangestatusCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorOnlineservicesChangestatusCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorOnlineservicesChangestatusCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
