import { Test, TestingModule } from '@nestjs/testing';
import { ExploreProductService } from './explore-product.service';

describe('ExploreProductService', () => {
  let service: ExploreProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExploreProductService],
    }).compile();

    service = module.get<ExploreProductService>(ExploreProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
