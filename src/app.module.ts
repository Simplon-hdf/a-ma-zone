import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, OrdersModule],
=======

@Module({
  imports: [],
>>>>>>> eb0c6fbf54967bc1d5448af817d341082ee3ee9a
=======
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [OrdersModule, UsersModule, ProductsModule],
>>>>>>> 0c25b3f232c96e4d170198a7935bed2967305919
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
