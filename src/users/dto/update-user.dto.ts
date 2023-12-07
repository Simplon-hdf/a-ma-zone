import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
    @IsOptional()
    public user_pseudo: string;
    @IsOptional()
    public username: string;
    @IsOptional()
    public user_password: string;
}
