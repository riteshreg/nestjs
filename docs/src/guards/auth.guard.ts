import {Observable} from 'rxjs'
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from 'src/decorators/roles.decorators';

@Injectable()
export class RoleGuard implements CanActivate{

    constructor(private reflector: Reflector ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       const roles = this.reflector.get(Roles, context.getHandler());
       if (!roles) {
        return true;
      }
      const request = context.switchToHttp().getRequest();
      const user = request.user;
    }
}