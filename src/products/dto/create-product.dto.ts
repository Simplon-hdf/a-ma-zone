import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, IsDateString, IsDate } from 'class-validator';

export class CreateProductDto {
  product_UUID: string;


  @ApiProperty({
    description: 'This field represents product name',
    minLength: 5,
    maxLength: 20,
  })
  @IsString()
  @Length(5, 50)
  public name: string;

  @ApiProperty({
    description: 'This field represents product description',
    minLength: 1,
    maxLength: 500,
  })
  @IsString()
  @Length(1, 500)
  public description: string;

  @ApiProperty({
    description: 'This field represents product price',
  })
  @IsInt()
  public price: number;

  @ApiProperty({
    description: 'This field represents product quantity',
  })
  @IsInt()
  public quantity: number;

  @ApiProperty({
    description: 'This field represents product created_at',
  })
  @IsDateString()
  public created_at: Date = new Date();

  @ApiProperty({
    description: 'This field represents product updated_at',
  })
  @IsDateString()
  public updated_at: Date = new Date()
}
