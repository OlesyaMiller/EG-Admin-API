import { Test, TestingModule } from '@nestjs/testing';
import { NavRecommendedDesignerController } from './nav-recommended-designer.controller';
import { NavRecommendedDesignerService } from './nav-recommended-designer.service';

describe('NavRecommendedDesignerController', () => {
  let controller: NavRecommendedDesignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavRecommendedDesignerController],
      providers: [NavRecommendedDesignerService],
    }).compile();

    controller = module.get<NavRecommendedDesignerController>(NavRecommendedDesignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
