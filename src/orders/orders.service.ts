import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) { }

  public async create(createOrderDto: CreateOrderDto) {
    return new NormalizedResponse(
      `Order ${createOrderDto.order_number} has been registered`,
      await this.prisma.orders.create({
        data: {
          order_number: createOrderDto.order_number,
          order_total_cost_ht: createOrderDto.order_total_cost_ht,
          order_total_quantity: createOrderDto.order_total_quantity,
          created_at: createOrderDto.created_at,
          delivrer_at: createOrderDto.delirer_at,
          User_UUID: createOrderDto.User_UUID as string
        }
      })
    ).toJSON();
  }

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
    return new NormalizedResponse(
      `Product for '${uuid}' uuid has been found`,
      await this.prisma.orders.findUnique({
        where: {
          order_number: uuid
        }
      })
    ).toJSON();
  }

  public async updateByUUID(uuid: string, updateOrderDto: UpdateOrderDto) {
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
          created_at: updateOrderDto.created_at,
          delivrer_at: updateOrderDto.delirer_at,
          User_UUID: updateOrderDto.User_UUID as string
        }
      })
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
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


