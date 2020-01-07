import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToOtherListComponent } from './move-to-other-list.component';

describe('MoveToOtherListComponent', () => {
  let component: MoveToOtherListComponent;
  let fixture: ComponentFixture<MoveToOtherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveToOtherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveToOtherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
