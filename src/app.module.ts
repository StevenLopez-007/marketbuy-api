import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${config.MONGO_ATLAS_USER}:${config.MONGO_ATLAS_PASS}@cluster0.lcaax.mongodb.net/marketbuyDB?retryWrites=true&w=majority`),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
