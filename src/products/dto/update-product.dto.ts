/* eslint-disable @typescript-eslint/no-unused-vars */
import { OmitType } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  public name: string;
  @IsOptional()
  public description: string;
  @IsOptional()
  public price: number;
  @IsOptional()
  public quantity: number;
  @IsOptional()
  public created_at: string;
  @IsOptional()
  public updated_at: string;
}
