import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddnewUserComponent } from './admin-addnew-user.component';

describe('AdminAddnewUserComponent', () => {
  let component: AdminAddnewUserComponent;
  let fixture: ComponentFixture<AdminAddnewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddnewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddnewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
