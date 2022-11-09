import { Test, TestingModule } from '@nestjs/testing';
import { NavTopDesignerController } from './nav-top-designer.controller';
import { NavTopDesignerService } from './nav-top-designer.service';

describe('NavTopDesignerController', () => {
  let controller: NavTopDesignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavTopDesignerController],
      providers: [NavTopDesignerService],
    }).compile();

    controller = module.get<NavTopDesignerController>(NavTopDesignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
