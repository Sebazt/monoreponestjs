import { Test, TestingModule } from '@nestjs/testing';
import { LibreryService } from './librery.service';

describe('LibreryService', () => {
  let service: LibreryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibreryService],
    }).compile();

    service = module.get<LibreryService>(LibreryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
