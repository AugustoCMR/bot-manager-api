import { Bot } from "src/bot/entities/bot.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("bot_to_user")
export class BotToUser {
  @PrimaryGeneratedColumn()
  botToUserId: number;

  @Column({ default: false })
  license_expired: boolean;

  @ManyToOne(() => Bot, (bot) => bot.botToUsers)
  @JoinColumn({ name: 'botId' })
  bot: Bot;

  @ManyToOne(() => User, (user) => user.botToUsers)
  @JoinColumn({ name: 'userId' })
  user: User;
}
