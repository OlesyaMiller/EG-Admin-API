import { Test, TestingModule } from '@nestjs/testing';
import { SellerProductController } from './seller-product.controller';
import { SellerProductService } from './seller-product.service';

describe('SellerProductController', () => {
  let controller: SellerProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellerProductController],
      providers: [SellerProductService],
    }).compile();

    controller = module.get<SellerProductController>(SellerProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
