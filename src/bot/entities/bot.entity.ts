import { BotToUser } from "src/bot-to-user/entities/bot-to-user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ default: false })
  status: boolean;

  @OneToMany(() => BotToUser, (botToUser) => botToUser.bot)
  botToUsers: BotToUser[];
}
