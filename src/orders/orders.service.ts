import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createOrderDto: CreateOrderDto) {
    const createdOrder = await this.prisma.orders.create({
      data: createOrderDto,
    });
    return createdOrder;
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
