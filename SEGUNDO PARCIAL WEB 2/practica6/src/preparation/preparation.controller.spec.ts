import { Test, TestingModule } from '@nestjs/testing';
import { PreparationController } from './preparation.controller';

describe('PreparationController', () => {
  let controller: PreparationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreparationController],
    }).compile();

    controller = module.get<PreparationController>(PreparationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
