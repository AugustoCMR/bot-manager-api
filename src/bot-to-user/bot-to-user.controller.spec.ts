import { Test, TestingModule } from '@nestjs/testing';
import { BotToUserController } from './bot-to-user.controller';
import { BotToUserService } from './bot-to-user.service';

describe('BotToUserController', () => {
  let controller: BotToUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BotToUserController],
      providers: [BotToUserService],
    }).compile();

    controller = module.get<BotToUserController>(BotToUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
