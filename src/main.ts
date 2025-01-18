import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

(async () => {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Social Media')
    .setDescription('')
    .setVersion('1.0')
    .addTag('Social Media')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(process.env.PORT || 3000);
})();
