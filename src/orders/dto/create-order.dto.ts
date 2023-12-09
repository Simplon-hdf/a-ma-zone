import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    description: 'This field represents order_number',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(1, 50)
  public order_number: string;

  @ApiProperty({
    description: 'This field represents order_total_cost_ht',
  })
  @IsInt()
  @Min(1)
  public order_total_cost_ht: number;

  @ApiProperty({
    description: 'This field represents order_total_quantity',
  })
  @IsInt()
  @Min(1)
  public order_total_quantity: number;

  @ApiProperty({
    description: 'This field represents order_created_at',
  })
  public order_created_at: Date;

  @ApiProperty({
    description: 'This field represents order_delivrer_at',
  })
  public order_delivrer_at: Date;

  @ApiProperty({
    description: 'This field represents user_uuid',
  })
  @Length(36)
  public user_uuid: string;
}
