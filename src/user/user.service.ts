import { ConflictException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;

    const user = await this.findOne(name);

    if (user) {
      throw new ConflictException("Usuário informado já existe");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = this.repository.create({
      name,
      password: hashedPassword,
      email
    })

    return this.repository.save(newUser);
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(name: string): Promise<User | null> {
    return this.repository.findOneBy({ name: ILike(name) });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
