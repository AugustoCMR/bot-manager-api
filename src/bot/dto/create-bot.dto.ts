import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmpty, IsNotEmpty, MaxLength } from "class-validator";

export class CreateBotDto {

  @ApiProperty()
  @Transform(({ value }) =>
    typeof value === "string" ? value.trim() : value
  )
  @IsNotEmpty({ message: "Nome é obrigatório" })
  @MaxLength(200, { message: 'Nome deve conter no máximo 200 caracteres'})
  name: string;

  @ApiProperty({nullable: true})
  @Transform(({ value }) => typeof value === "string" ? value.trim() : value )
  @MaxLength(500, { message: 'Descrição deve conter no máximo 500 caracteres'})
  description: string;
}
