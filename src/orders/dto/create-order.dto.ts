import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'Order order_total_cost_ht',
  })
  @IsInt()
  public order_total_cost_ht: number;

  @ApiProperty({
    description: 'order_total_quantity',
  })
  @IsInt()
  public order_total_quantity: number;

  @ApiProperty({
    description: 'user_UUID',
  })
  @IsString()
  public user_UUID: string;
}
