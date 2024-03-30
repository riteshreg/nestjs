import { BadRequestException, HttpStatus } from '@nestjs/common';

export class UnableToInsertException extends BadRequestException {
  constructor(message: string) {
    super(message);
  }
}
