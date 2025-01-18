import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import mongodbConfig from './shared/config/mongodb.config';
import { envConfigValidator } from './shared/config/env-validation-schema';
import { HelloModule } from './hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongodbConfig],
      validationSchema: envConfigValidator,
      validationOptions: {
        abortEarly: true,
      },
    }),
    HelloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
