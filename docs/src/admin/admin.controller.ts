import { Controller, Get, Inject } from '@nestjs/common';
import { AdminService } from './admin';
import { CatService } from 'src/cat/cat.service';

@Controller('admin')
export class AdminController {

  constructor(private readonly adminService: AdminService ){}

    @Get()
    index(): any {
      return this.adminService.getAdminPage()
    }
}
