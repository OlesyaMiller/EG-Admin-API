import { Test, TestingModule } from '@nestjs/testing';
import { ExploreCategoryController } from './explore-category.controller';
import { ExploreCategoryService } from './explore-category.service';

describe('ExploreCategoryController', () => {
  let controller: ExploreCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExploreCategoryController],
      providers: [ExploreCategoryService],
    }).compile();

    controller = module.get<ExploreCategoryController>(ExploreCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
