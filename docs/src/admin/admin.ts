import { ForbiddenException, HttpException, HttpStatus, Injectable, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';

@Injectable()
export class AdminService {
    @UseFilters(new HttpExceptionFilter())
     getAdminPage(){
        // return "Admin Page"
      throw new ForbiddenException()
    }
}
