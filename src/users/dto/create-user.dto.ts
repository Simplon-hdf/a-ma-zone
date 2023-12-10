import { ApiProperty } from '@nestjs/swagger';
import {IsString, Length, IsDateString, IsDate } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'This field represents the new user pseudo',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(5, 20)
  public pseudo: string;

  @ApiProperty({
    description: 'This field represents the new user username',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(5, 20)
  public username: string;

  @ApiProperty({
    description: 'This field represents the new user password',
    minLength: 1,
    maxLength: 72,
  })
  @IsString()
  @Length(5, 72)
  public password: string;

  @ApiProperty({
    description: 'This field represents the new user created_at',
  })
  @IsDateString()
  public created_at: Date = new Date();
}
