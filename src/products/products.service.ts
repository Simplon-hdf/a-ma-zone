import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createProductDto: CreateProductDto) {
    return new NormalizedResponse(
      `Product ${createProductDto.product_name} has been registered`,
      await this.prisma.products.create({
        data: {
          product_name: createProductDto.product_name,
          product_description: createProductDto.product_description,
          product_price: createProductDto.product_price,
          product_quantity: createProductDto.product_quantity
        },
      }),
    ).toJSON();
  }

  findAll() {
    return `This action returns all products`;
  }

  public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.products.findUnique({
        where: {
          product_UUID: uuid,
        },
      }),
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateProductDto: UpdateProductDto) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been updated`,
      await this.prisma.products.update({
        where: {
          product_UUID: uuid,
        },
        data: {
          product_name: updateProductDto.name,
          product_description: updateProductDto.description,
          product_price: updateProductDto.price,
          product_quantity: updateProductDto.quantity,
        },
      }),
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid} has been deleted'`,
      await this.prisma.products.delete({ where: { product_UUID: uuid } }),
    ).toJSON();
  }
}
