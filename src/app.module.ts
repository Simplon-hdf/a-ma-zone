import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [OrdersModule],
=======
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
>>>>>>> 0c8699b56261c5d222b5301bd83e9c0444c986bf
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
