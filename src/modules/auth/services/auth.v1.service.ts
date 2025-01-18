import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthServiceV1 {
  constructor(@InjectRepository(User) readonly userRepo: Repository<User>) {}
  async register(): Promise<any> {
    return {};
  }
}
