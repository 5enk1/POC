import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromListComponent } from './remove-from-list.component';

describe('RemoveFromListComponent', () => {
  let component: RemoveFromListComponent;
  let fixture: ComponentFixture<RemoveFromListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveFromListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
