import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

  // public async create(createOrderDto: CreateOrderDto) {
  //   return new NormalizedResponse(
  //     `Order has been registered`,
  //     await this.prisma.orders.create({
  //       data: {
  //         order_total_cost_ht: createOrderDto.order_total_cost_ht,
  //         order_total_quantity: createOrderDto.order_total_quantity,
  //         user_UUID : createOrderDto.user_UUID,
  //       }
  //     })
  //   ).toJSON();
  // }


  private async generateForwardDate(daysToAdd: number, from?: Date) {
    const newDate = from ?? new Date();
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }
  


  private async getProducts(productUUIDS: string[]) {
    return await this.prisma.products.findMany({
      where: {
        OR: productUUIDS.map((product) => ({
          product_UUID: product,
        })),
      },
    });
  }


  public async create(createOrderDto: CreateOrderDto) {
    const orderedProducts = await this.getProducts(
      createOrderDto.products_uuid,
    );

    const totalCost = orderedProducts
      .map((product) => product.product_price)
      .reduce((total, current) => total + current);

    return await this.prisma.orders.create({
      data: {
        order_total_cost_ht: totalCost,
        user: {
          connect: {
            user_UUID: createOrderDto.user_UUID,
          },
        },
        Belong: {
          createMany: {
            data: orderedProducts.map((product) => ({
              product_UUID: product.product_UUID,
            })),
          },
        },
        order_total_quantity: orderedProducts.length,
        deliver_at: await this.generateForwardDate(7),
      },
      select: {
        order_total_cost_ht: true,
        user: true,
        order_total_quantity: true,
        Belong: {
          select: {
            Product: true,
          },
        },
      },
    });
  }



  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: number) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.orders.findUnique({
        where: {
          order_number: uuid
        }
      })
    ).toJSON();
  }

  public async updateByUUID(uuid: number, updateOrderDto: UpdateOrderDto) {
    return new NormalizedResponse(
      `Order for '${uuid}' uuid has been updated`,
      await this.prisma.orders.update({
        where: {
          order_number: uuid
        },
        data: {
          order_number: updateOrderDto.order_number,
          order_total_cost_ht: updateOrderDto.order_total_cost_ht,
          order_total_quantity: updateOrderDto.order_total_quantity,
        }
      })
    ).toJSON();
  }

  public async deleteByUUID(uuid: number) {
    return new NormalizedResponse(
      `Orders for '${uuid} has been deleted'`,
      await this.prisma.orders.delete({
        where: {
          order_number: uuid
        }
      })
    ).toJSON();
  }
}