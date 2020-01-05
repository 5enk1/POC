import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderForListComponent } from './slider-for-list.component';

describe('SliderForListComponent', () => {
  let component: SliderForListComponent;
  let fixture: ComponentFixture<SliderForListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderForListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderForListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
