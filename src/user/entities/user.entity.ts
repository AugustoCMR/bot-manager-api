import { BotToUser } from "src/bot-to-user/entities/bot-to-user.entity";
import { RoleUser } from "src/common/enums/role-user.enum";
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

  @Column({type: 'enum', enum: RoleUser, default: RoleUser.client})
  role: RoleUser

  @OneToMany(() => BotToUser, (botToUser) => botToUser.user)
  botToUsers: BotToUser[];
}
