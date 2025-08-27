import { Module } from "@nestjs/common";
import { BotToUserService } from "./bot-to-user.service";
import { BotToUserController } from "./bot-to-user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BotToUser } from "./entities/bot-to-user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BotToUser])],
  controllers: [BotToUserController],
  providers: [BotToUserService],
})
export class BotToUserModule {}
