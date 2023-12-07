import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductsService } from 'src/products/products.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
   /*  private readonly productsService: ProductsService, */
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uuid')
  public getByUUID(@Param('uuid') uuid: string) {
    return this.usersService.getByUUID(uuid);
  }

  // @Get(':uuid/products')
  // public getProductsByUserUUID(@Param('uuid') uuid: string) {
  //   return this.productsService.getProductsByUserUUID(uuid);
  // }

  @Patch(':uuid')
  public updateByUUID(
    @Param('uuid') uuid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateByUUID(uuid, updateUserDto);
  }

  @Delete(':uuid')
  public deleteByUUID(@Param('uuid') uuid: string) {
    return this.usersService.deleteByUUID(uuid);
  }

  // @Delete(':uuid/products')
  // public deleteProductsByUserUUID(@Param('uuid') uuid: string) {
  //   return this.productsService.deleteProductsByUserUUID(uuid);
  // }
}
