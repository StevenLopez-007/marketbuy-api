import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import config from 'src/config';

@Module({
  imports:[
    MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    JwtModule.register({
      secret:config.SECRETJWT,
      signOptions:{expiresIn:3600}
    })
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
