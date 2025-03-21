import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { BffModule } from './bff.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    BffModule,
    new FastifyAdapter(),
  );

  app.setGlobalPrefix('api');

  const PORT = process.env.PORT || 3333;
  
  await app.listen(PORT, '0.0.0.0');
  console.log(`🚀 Aurora BFF is running on http://localhost:3333`);
  
}
bootstrap();
