import { IsOptional } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
    @IsOptional()
    public user_pseudo: string;
    @IsOptional()
    public user_name: string;
    @IsOptional()
    public user_password: string;
}
