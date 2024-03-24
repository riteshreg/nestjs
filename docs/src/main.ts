import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware, logger } from './middleware/logger.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors:true,
  });
  

  app.useGlobalPipes(new ValidationPipe());
  
app.use(logger)
// loggining
await app.listen(3000);

}
bootstrap();
