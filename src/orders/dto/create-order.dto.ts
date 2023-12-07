import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsDateString, IsInt, IsString, Length, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'order_number',
    maxLength: 36,
  })
  @IsString()
  public order_number: string;

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
    description: 'created_at',
    maxLength: 20
  })
  @IsDate()
  public created_at: Date = new Date();

  @ApiProperty({
    description: 'delirer_at',
    maxLength: 20
  })
  @IsDate()
  public delirer_at: Date = new Date();

  @ApiProperty({
    description: 'User_UUID',
    maxLength: 36
  })
  @IsString()
  public User_UUID: String;
}
