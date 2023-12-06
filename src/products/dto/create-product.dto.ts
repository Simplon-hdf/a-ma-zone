import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID, Length, Min } from 'class-validator';

export class CreateProductDto {
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
  @Length(1, 1000)
  public description: string;

  @ApiProperty({
    description: 'This field represents product price',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  public price: number;

  @ApiProperty({
    description: 'This field represents product quantity',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  public quantity: number;

  @ApiProperty({
    description: 'This field represents product created_at',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  public created_at: string;

  @ApiProperty({
    description: 'This field represents product updated_at',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  public updated_at: string;

//   @ApiProperty({
//     description: 'This field has to be a User UUID',
//     minLength: 36,
//     maxLength: 36,
//   })
//   @IsUUID('4')
//   @Length(36, 36)
//   public owner_uuid: string;
}
