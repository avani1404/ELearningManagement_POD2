import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLayoutComponent } from './l-layout.component';

describe('LLayoutComponent', () => {
  let component: LLayoutComponent;
  let fixture: ComponentFixture<LLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
