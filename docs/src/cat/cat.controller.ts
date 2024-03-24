import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Header,
  HttpCode,
  HttpException,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
  UseFilters,
  ParseIntPipe,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CatService } from './cat.service';
import { CreateCatDto, createCatSchema } from './create-cat.dto';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { RoleGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/decorators/roles.decorators';
import { Reflector } from '@nestjs/core';
import { TransformInterceptor } from 'src/interceptors/logger.interceptors';
import { Hello } from 'src/decorators/user.decorator';

@Controller('cats')
@UseGuards(RoleGuard)
@UseInterceptors(new TransformInterceptor())
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  @HttpCode(200)
  async findAll(@Hello() user: any): Promise<any[]> {
    console.log('rninng', user);
    return this.catService.findAll();
  }

  @Get(':uuid')
  getCat(@Param('uuid') id: string) {
    console.log(id);
    return 'xyz';
  }

  @Post()
  create(@Body(new ValidationPipe()) catDto: CreateCatDto): boolean {
    this.catService.create(catDto);
    return true;
  }
}
