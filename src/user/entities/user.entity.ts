import { BotToUser } from "src/bot-to-user/entities/bot-to-user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({length: 200})
  name:string;

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => BotToUser, (botToUser) => botToUser.user)
  botToUsers: BotToUser[];
}
