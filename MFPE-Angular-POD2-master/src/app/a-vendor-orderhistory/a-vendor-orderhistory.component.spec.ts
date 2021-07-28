import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorOrderhistoryComponent } from './a-vendor-orderhistory.component';

describe('AVendorOrderhistoryComponent', () => {
  let component: AVendorOrderhistoryComponent;
  let fixture: ComponentFixture<AVendorOrderhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorOrderhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
