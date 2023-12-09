import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createOrderDto: CreateOrderDto) {
    return new NormalizedResponse(
      `Order ${createOrderDto.order_number} has been registered`,
      await this.prisma.orders.create({
        data: {
          order_number: createOrderDto.order_number,
          order_total_cost_ht: createOrderDto.order_total_cost_ht,
          order_total_quantity: createOrderDto.order_total_quantity,
          order_created_at: createOrderDto.order_created_at,
          order_delivrer_at: createOrderDto.order_delivrer_at,
        },
      }),
    ).toJSON();
  }

  public async getByUUID(uuid: string) {
    const getOrder = await this.prisma.orders.findUnique({
      where: {
        order_number: uuid,
      },
    });
    return getOrder;
  }

  public async updateByUUID(uuid: string, updateOrderDto: UpdateOrderDto) {
    const updatedOrder = await this.prisma.orders.update({
      where: {
        order_number: uuid,
      },
      data: updateOrderDto,
    });
    return updatedOrder;
  }

  public async deleteByUUID(uuid: string) {
    const deletedOrder = await this.prisma.orders.delete({
      where: {
        order_number: uuid,
      },
    });
    return deletedOrder;
  }
}
