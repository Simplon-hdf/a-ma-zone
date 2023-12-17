import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [OrdersModule, UsersModule, ProductsModule, AuthorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
