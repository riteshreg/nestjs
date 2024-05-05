import { Injectable, Logger } from '@nestjs/common';
import {
  Cron,
  CronExpression,
  Interval,
  SchedulerRegistry,
  Timeout,
} from '@nestjs/schedule';

import { CronJob } from 'cron';

@Injectable()
export class CronjobService {
  private readonly logger = new Logger(CronjobService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {}

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // secondCorn(){
  //     this.logger.debug("running every 30 sec")
  // }

  // @Interval(10000)
  // handleInterval(){
  //     this.logger.debug('running every 10 sec interval')
  // }

  // @Timeout(5*1000)
  // handleTimeout(){
  //     this.logger.warn('timeout: run once after 5 sec')
  // }

  @Cron(CronExpression.EVERY_30_SECONDS, {
    name: 'notifications',
  })
  triggerNotifications() {
    console.log('30 sec running');
  }



  addCronJob(name: string, seconds: string) {
    const job = new CronJob(`${seconds} * * * * *`, () => {
      this.logger.warn(`time (${seconds}) for job ${name} to run!`);
    });

    this.schedulerRegistry.addCronJob(name, job);
    job.start();

    this.logger.warn(
      `job ${name} added for each minute at ${seconds} seconds!`,
    );
  }


}
