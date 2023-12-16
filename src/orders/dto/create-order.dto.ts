import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {

  public user_uuid: string;
  public products_uuid: string[];
  
}
