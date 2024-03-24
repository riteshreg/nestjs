import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin';

describe('Admin', () => {
  let provider: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminService],
    }).compile();

    provider = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
