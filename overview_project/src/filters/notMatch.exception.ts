import { NotFoundException } from '@nestjs/common';

export class NotMatchException extends NotFoundException {
  constructor(message: string) {
    super(message);
  }
}
