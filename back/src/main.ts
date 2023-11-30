import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { join } from 'path';
import * as cors from 'cors'



async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    );
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe())
  
  app.useStaticAssets({
    root: join(__dirname, '../src', 'public'),
    prefix: '/public/',
  });
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '../src', 'views'),
  });

  await app.listen(3001);

}
bootstrap();
