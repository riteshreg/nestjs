import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/customs/decorators.custom';
import { Roles } from 'src/customs/decorators/roles.decorators';
import { Role } from 'src/auth/role.enum';

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

  @Post('create')
  @Roles(Role.Admin)
  createUser(@Body() createUserDto:any){
    return true
  }
}
