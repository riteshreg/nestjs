import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/app/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from 'src/lib/hash';
import { NotMatchException } from 'src/filters/notMatch.exception';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne({ email });
    if (!user) {
      throw new NotFoundException;
    }

    if (!await compareHash(pass, user.password)) {
      throw new NotFoundException();
    }

    const { password, ...payload } = user;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
