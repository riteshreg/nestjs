import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/customs/decorators.custom';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Public()
  @Get()
  getAllUser() {
    return this.userService.findOne('john');
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
