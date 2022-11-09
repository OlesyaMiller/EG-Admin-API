import { Test, TestingModule } from '@nestjs/testing';
import { NavTopDesignerService } from './nav-top-designer.service';

describe('NavTopDesignerService', () => {
  let service: NavTopDesignerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavTopDesignerService],
    }).compile();

    service = module.get<NavTopDesignerService>(NavTopDesignerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
