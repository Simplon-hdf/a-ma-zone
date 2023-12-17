import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'This field represents product name',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(5, 50)
  public product_name: string;

  @ApiProperty({
    description: 'This field represents product description',
    minLength: 1,
    maxLength: 500,
  })
  @IsString()
  @Length(1, 500)
  public product_description: string;

  @ApiProperty({
    description: 'This field represents product price',
  })
  @IsInt()
  public product_price: number;

  @ApiProperty({
    description: 'This field represents product quantity',
  })
  @IsInt()
  public product_quantity: number;
}
