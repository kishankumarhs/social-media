import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/modules/users/entity/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: function (configService: ConfigService) {
        const user = configService.get<string>('mongodb.username');
        const password = configService.get<string>('mongodb.password');
        const host = configService.get<string>('mongodb.host');
        const dbName = configService.get<string>('mongodb.dbName');
        return {
          type: 'mongodb',
          url: `mongodb+srv://${user}:${password}@${host}/${dbName}`,
          entities: [User],
        };
      },
    }),
  ],
})
export class DatabasesModule {
  constructor(private dataSource: DataSource) {}
}
