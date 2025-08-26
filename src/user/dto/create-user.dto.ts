import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class CreateUserDto {
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsEmail({}, { message: "Email inválido"})
  @IsNotEmpty({message: "Email é obrigatório"})
  email:string;

  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @MaxLength(20, { message: 'Nome deve conter no máximo 200 caracteres' })
  @IsNotEmpty({message: "Nome é obrigatório"})
  name:string;

  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @Length(6, 30, { message: 'Senha deve conter entre 6 e 30 caracteres' })
  @IsNotEmpty({message: "Senha é obrigatório"})
  password: string;
}
