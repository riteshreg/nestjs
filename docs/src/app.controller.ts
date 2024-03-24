import { Body, Controller, Get, Post, RawBodyRequest, Req, } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get("/ritesh")
  helloRitesh():string{
    return this.appService.helloRitesh();
  }

}
