import { Test, TestingModule } from '@nestjs/testing';
import { ExploreProductController } from './explore-product.controller';
import { ExploreProductService } from './explore-product.service';

describe('ExploreProductController', () => {
  let controller: ExploreProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExploreProductController],
      providers: [ExploreProductService],
    }).compile();

    controller = module.get<ExploreProductController>(ExploreProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
