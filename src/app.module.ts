import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import mongodbConfig from './config/env/mongodb.config';
import { envConfigValidator } from './config/env/env-validation-schema';
import { AuthModule } from './modules/auth/auth.module';
import { DatabasesModule } from './shared/database/typeorm/database.module';

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
    AuthModule,
  ],
})
export class AppModule {}
