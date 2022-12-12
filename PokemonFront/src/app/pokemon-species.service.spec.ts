import { TestBed } from '@angular/core/testing';

import { PokemonSpeciesService } from './pokemon-species.service';

describe('PokemonSpeciesService', () => {
  let service: PokemonSpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonSpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
