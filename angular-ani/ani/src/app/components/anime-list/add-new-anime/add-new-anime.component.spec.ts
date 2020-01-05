import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnimeComponent } from './add-new-anime.component';

describe('AddNewAnimeComponent', () => {
  let component: AddNewAnimeComponent;
  let fixture: ComponentFixture<AddNewAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAnimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
