import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Public } from 'src/customs/decorators.custom';
import { Roles } from 'src/customs/decorators/roles.decorators';
import { Role } from 'src/auth/role.enum';
import { USER, userSchema } from './user.dto';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { HttpExceptionFilter } from 'src/filters/ http-exception.filter';

@Controller('user')
export class UserController {
  constructor(private userService: UsersService) {}

  @Public()
  @Get()
  async getAllUser() {
    return await this.userService.findAll();
  }

  @Get('profile')
  @Get(Role.User)
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('create')
  @UsePipes(new ZodValidationPipe(userSchema))
  @UseFilters(HttpExceptionFilter)
  @HttpCode(HttpStatus.OK)
  @Roles(Role.Admin, Role.User)
  async createUser(@Body() createUserDto: USER) {
    return this.userService.create(createUserDto);
  }
}
