import { Injectable } from '@nestjs/common';
import { CreateBotToUserDto } from './dto/create-bot-to-user.dto';
import { UpdateBotToUserDto } from './dto/update-bot-to-user.dto';

@Injectable()
export class BotToUserService {
  create(createBotToUserDto: CreateBotToUserDto) {
    return 'This action adds a new botToUser';
  }

  findAll() {
    return `This action returns all botToUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} botToUser`;
  }

  update(id: number, updateBotToUserDto: UpdateBotToUserDto) {
    return `This action updates a #${id} botToUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} botToUser`;
  }
}
