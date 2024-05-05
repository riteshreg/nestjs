import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import {ScheduleModule} from '@nestjs/schedule'
import { CronjobModule } from './cronjob/cronjob.module';

@Module({
  imports: [UploadModule, ScheduleModule.forRoot(), CronjobModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
