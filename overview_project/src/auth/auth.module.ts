import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/app/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,{
    provide:APP_GUARD,
    useClass:AuthGuard
  }],
})
export class AuthModule {}
