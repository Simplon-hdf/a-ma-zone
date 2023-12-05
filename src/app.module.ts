import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, OrdersModule],
=======

@Module({
  imports: [],
>>>>>>> eb0c6fbf54967bc1d5448af817d341082ee3ee9a
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
