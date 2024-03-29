import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/app/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException;
    }

    if (user.password !== pass) {
      throw new  UnauthorizedException;
    }

    const { password, ...payload } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
