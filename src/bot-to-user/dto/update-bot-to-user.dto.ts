import { PartialType } from '@nestjs/swagger';
import { CreateBotToUserDto } from './create-bot-to-user.dto';

export class UpdateBotToUserDto extends PartialType(CreateBotToUserDto) {}
