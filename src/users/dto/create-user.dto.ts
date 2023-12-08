import { ApiProperty } from '@nestjs/swagger';
import {IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'This field represents the new user pseudo',
    minLength: 5,
    maxLength: 30,
  })
  @IsString()
  @Length(5, 30)
  public user_pseudo: string;

  @ApiProperty({
    description: 'This field represents the new user username',
    minLength: 5,
    maxLength: 30,
  })
  @IsString()
  @Length(5, 30)
  public user_name: string;

  @ApiProperty({
    description: 'This field represents the new user password',
    minLength: 5,
    maxLength: 72,
  })
  @IsString()
  @Length(5, 72)
  public user_password: string;
}


