import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
