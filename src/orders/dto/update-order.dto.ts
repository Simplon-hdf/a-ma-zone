/* eslint-disable @typescript-eslint/no-unused-vars */
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsOptional } from 'class-validator';

export class UpdateOrderDto extends CreateOrderDto {
  @IsOptional()
  public order_number: string;
  @IsOptional()
  public order_total_cost_ht: number;
  @IsOptional()
  public order_total_quantity: number;
  @IsOptional()
  public order_created_at: Date;
  @IsOptional()
  public order_delivrer_at: Date;
  @IsOptional()
  public user_uuid: string;
}
