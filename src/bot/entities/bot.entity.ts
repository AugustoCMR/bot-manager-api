import { BotToUser } from "src/bot-to-user/entities/bot-to-user.entity";
import { BotStatus } from "src/common/enums/bot-status.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: BotStatus,
    default: BotStatus.PENDING
  })
  status: BotStatus;

  @OneToMany(() => BotToUser, (botToUser) => botToUser.bot)
  botToUsers: BotToUser[];
}
