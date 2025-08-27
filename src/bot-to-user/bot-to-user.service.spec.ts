import { Test, TestingModule } from '@nestjs/testing';
import { BotToUserService } from './bot-to-user.service';

describe('BotToUserService', () => {
  let service: BotToUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotToUserService],
    }).compile();

    service = module.get<BotToUserService>(BotToUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
