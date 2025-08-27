import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ example: 'augusto' })
  @Transform(({ value }) => typeof value === 'string' ? value.trim().toLowerCase() : value)
  @IsString()
  username: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  password: string;
}