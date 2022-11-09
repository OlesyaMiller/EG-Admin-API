import { Test, TestingModule } from '@nestjs/testing';
import { NavRecommendedDesignerService } from './nav-recommended-designer.service';

describe('NavRecommendedDesignerService', () => {
  let service: NavRecommendedDesignerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavRecommendedDesignerService],
    }).compile();

    service = module.get<NavRecommendedDesignerService>(NavRecommendedDesignerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
