import { TestBed } from '@angular/core/testing';

import { AnimeCardServiceService } from './anime-card-service.service';

describe('AnimeCardServiceService', () => {
  let service: AnimeCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
