import { Module } from '@nestjs/common';
import { DatabasesModule } from '../database/typeorm/database.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import mongodbConfig from 'src/config/env/mongodb.config';
import { envConfigValidator } from 'src/config/env/env-validation-schema';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./env/.env.dev', './env/.env.*'],
      isGlobal: true,
      cache: true,
      load: [mongodbConfig],
      validationSchema: envConfigValidator,
      validationOptions: {
        abortEarly: true,
      },
    }),
    DatabasesModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 50,
      },
    ]),
  ],
})
export class CommonModule {}
