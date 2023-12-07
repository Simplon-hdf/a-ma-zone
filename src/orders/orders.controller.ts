import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  public create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  public findAll() {
    return this.ordersService.findAll();
  }

  @Get(':uuid')
  public getByUUID(
    @Param('uuid')
    uuid: string,
  ) {
    return this.ordersService.getByUUID(uuid);
  }

  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.updateByUUID(uuid, updateOrderDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.ordersService.deleteByUUID(uuid);
  }
}
