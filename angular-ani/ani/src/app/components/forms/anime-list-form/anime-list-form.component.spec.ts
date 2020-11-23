import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeListFormComponent } from './anime-list-form.component';

describe('AnimeListFormComponent', () => {
  let component: AnimeListFormComponent;
  let fixture: ComponentFixture<AnimeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeListFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
