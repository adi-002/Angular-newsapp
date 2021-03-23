import { TestBed } from '@angular/core/testing';
import { NewsApiservicesService } from './news-apiservices.service';

describe('NewsApiservicesService', () => {
  let service: NewsApiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsApiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
