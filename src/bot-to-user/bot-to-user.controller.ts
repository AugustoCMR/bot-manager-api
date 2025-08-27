import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BotToUserService } from './bot-to-user.service';
import { CreateBotToUserDto } from './dto/create-bot-to-user.dto';
import { UpdateBotToUserDto } from './dto/update-bot-to-user.dto';

@Controller('bot-to-user')
export class BotToUserController {
  constructor(private readonly botToUserService: BotToUserService) {}

  @Post()
  create(@Body() createBotToUserDto: CreateBotToUserDto) {
    return this.botToUserService.create(createBotToUserDto);
  }

  @Get()
  findAll() {
    return this.botToUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.botToUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBotToUserDto: UpdateBotToUserDto) {
    return this.botToUserService.update(+id, updateBotToUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.botToUserService.remove(+id);
  }
}
