import { TestBed } from '@angular/core/testing';

import { AnimeProviderService } from './anime-provider.service';

describe('AnimeProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeProviderService = TestBed.get(AnimeProviderService);
    expect(service).toBeTruthy();
  });
});
