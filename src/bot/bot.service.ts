import { ConflictException, Injectable } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
import { UpdateBotDto } from './dto/update-bot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bot } from './entities/bot.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class BotService {
  constructor(@InjectRepository(Bot) private repository: Repository<Bot>) {}

  async create(createBotDto: CreateBotDto) {
    const {name, description} = createBotDto;

    const bot = await this.findOne(name);

    if(bot) {
      throw new ConflictException("Bot informado já existe");
    }

    const newBot = this.repository.create({
      name,
      description
    })

    return this.repository.save(newBot);

  }

  findAll() {
    return `This action returns all bot`;
  }

  async findOne(name: string): Promise<Bot | null> {
    return await this.repository.findOneBy({name: ILike(name)});
  }

  update(id: number, updateBotDto: UpdateBotDto) {
    return `This action updates a #${id} bot`;
  }

  remove(id: number) {
    return `This action removes a #${id} bot`;
  }
}
