import { Test, TestingModule } from '@nestjs/testing';
import { ExploreDesignerService } from './explore-designer.service';

describe('ExploreDesignerService', () => {
  let service: ExploreDesignerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExploreDesignerService],
    }).compile();

    service = module.get<ExploreDesignerService>(ExploreDesignerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
