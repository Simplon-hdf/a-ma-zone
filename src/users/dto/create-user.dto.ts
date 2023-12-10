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
<<<<<<< HEAD
  public password: string;

  @ApiProperty({
    description: 'This field represents the new user created_at',
  })
  @IsDateString()
  public created_at: Date = new Date();
=======
  public user_password: string;
>>>>>>> c301c49555182a7e64953ca763aed35ae0c84769
}


