import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CronjobService } from './cronjob.service';

type AddCronJobDto = {
    name:string;
    second:string;
}

@Controller('cronjob')
export class CronjobController {

constructor(private cronJobService:CronjobService){};

  @Get()
  getIndex() {
    return 'cronjob page';
  }

  @Post()
  addCronJob(@Body() addCronJobDto: AddCronJobDto){
    this.cronJobService.addCronJob(addCronJobDto.name, addCronJobDto.second)
    return 'added'
  }
}
