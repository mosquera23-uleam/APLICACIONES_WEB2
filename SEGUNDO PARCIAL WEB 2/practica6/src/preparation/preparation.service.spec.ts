import { Test, TestingModule } from '@nestjs/testing';
import { PreparationService } from './preparation.service';

describe('PreparationService', () => {
  let service: PreparationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreparationService],
    }).compile();

    service = module.get<PreparationService>(PreparationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
