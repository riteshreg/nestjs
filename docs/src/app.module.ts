import { Module, NestModule, MiddlewareConsumer, RequestMethod, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatMoudle } from './cat/cat.module';
import { AdminModule } from './admin/admin.module';
import { LoggerMiddleware, logger } from './middleware/logger.middleware';
import { CatController } from './cat/cat.controller';

@Module({
  imports: [CatMoudle, AdminModule],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      logger,
      LoggerMiddleware
    )
    .exclude({
      path:'cats',
      method:RequestMethod.POST
    })
    .forRoutes(CatController)
  }
}


