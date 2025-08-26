import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @IsEmail({}, { message: "Email inválido"})
  @IsNotEmpty({message: "Email é obrigatório"})
  email:string;

  @ApiProperty()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @MaxLength(20, { message: 'Nome deve conter no máximo 200 caracteres' })
  @IsNotEmpty({message: "Nome é obrigatório"})
  name:string;

  @ApiProperty()
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  @Length(6, 30, { message: 'Senha deve conter entre 6 e 30 caracteres' })
  @IsNotEmpty({message: "Senha é obrigatório"})
  password: string;
}
