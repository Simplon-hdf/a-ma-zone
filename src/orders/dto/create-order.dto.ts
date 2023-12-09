import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'order_number',
    maxLength: 36,
  })
  @IsString()
  public order_number: number;

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
  @IsNumber()
  public user_UUID: string;
}
