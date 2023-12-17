import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import NormalizedResponse from 'src/utils/normalized-response';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

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

  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

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

  // public async getProductsByUserUUID(userUUID: string) {
  //   return new NormalizedResponse(
  //     `Products of user '${userUUID}' uuid has been found`,
  //     await this.prisma.products.findMany({
  //       where: {
  //         Author: {
  //           UUID: userUUID,
  //         },
  //       },
  //     }),
  //   ).toJSON();
  // }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

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

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }

  public async deleteByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid} has been deleted'`,
      await this.prisma.products.delete({ where: { product_UUID: uuid } }),
    ).toJSON();
  }

  // public async deleteProductsByUserUUID(userUUID: string) {
  //   return new NormalizedResponse(
  //     `Products for user '${userUUID}' uuid has been deleted`,
  //     await this.prisma.products.deleteMany({
  //       where: {
  //         Author: {
  //           UUID: userUUID,
  //         },
  //       },
  //     }),
  //   ).toJSON();
}
