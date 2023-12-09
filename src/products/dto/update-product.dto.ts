import { IsOptional } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends CreateProductDto {
  @IsOptional()
  public name: string;
  @IsOptional()
  public description: string;
  @IsOptional()
  public price: number;
  @IsOptional()
  public quantity: number;
}
