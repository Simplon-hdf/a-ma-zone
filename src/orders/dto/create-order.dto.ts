import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString, Length, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'order_number',
    maxLength: 36,
  })
  @IsString()
  @Length(36)
  public order_number: string;

  @ApiProperty({
    description: 'Order order_total_cost_ht',
    minLength: 1,
    maxLength: 20
  })
  @IsInt()
  @Length(1, 20)
  public order_total_cost_ht: number;

  @ApiProperty({
    description: 'order_total_quantity',
    maxLength: 20
  })
  @IsInt()
  @Length(20)
  public order_total_quantity: number;

  @ApiProperty({
    description: 'created_at',
    maxLength: 20
  })
  @IsDate()
  @Length(20)
  public created_at: Date;

  @ApiProperty({
    description: 'delirer_at',
    maxLength: 20
  })
  @IsDate()
  @Length(20)
  public delirer_at: Date;

  @ApiProperty({
    description: 'User_UUID',
    maxLength: 36
  })
  @IsString()
  @Length(36)
  public User_UUID: String;

}
