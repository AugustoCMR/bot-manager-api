import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}
  
  async signIn(
    username: string,
    password: string
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {

      throw new UnauthorizedException("Credenciais inválidas");
    }

    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
