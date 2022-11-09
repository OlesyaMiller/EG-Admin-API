import { Test, TestingModule } from '@nestjs/testing';
import { ExploreCategoryService } from './explore-category.service';

describe('ExploreCategoryService', () => {
  let service: ExploreCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExploreCategoryService],
    }).compile();

    service = module.get<ExploreCategoryService>(ExploreCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
