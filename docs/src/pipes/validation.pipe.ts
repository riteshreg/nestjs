import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {
  }

  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parseValue = this.schema.parse(value);
      return parseValue;
    } catch (e) {
      throw new BadRequestException('validation failed');
    }
  }
}
