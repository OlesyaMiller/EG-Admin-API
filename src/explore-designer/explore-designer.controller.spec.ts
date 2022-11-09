import { Test, TestingModule } from '@nestjs/testing';
import { ExploreDesignerController } from './explore-designer.controller';
import { ExploreDesignerService } from './explore-designer.service';

describe('ExploreDesignerController', () => {
  let controller: ExploreDesignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExploreDesignerController],
      providers: [ExploreDesignerService],
    }).compile();

    controller = module.get<ExploreDesignerController>(ExploreDesignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
