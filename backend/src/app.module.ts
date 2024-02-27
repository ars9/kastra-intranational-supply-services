import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.controller';
import { OrderSchema } from './schema/order.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27107/',{dbName: 'orderdb'}),
  MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
  controllers: [AppController, OrderController],
  providers: [AppService, OrderService],
})
export class AppModule {}
