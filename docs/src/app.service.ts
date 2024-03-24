import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  helloRitesh():string{
    return 'Hello Ritesh, how are you?'
  }
}
