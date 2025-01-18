import { Module } from '@nestjs/common';
import { AuthControllerV1 } from './controllers/auth.v1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { AuthServiceV1 } from './services/auth.v1.service';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthControllerV1],
  providers: [AuthServiceV1],
})
export class AuthModule {}
