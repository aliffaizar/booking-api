import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { UsersModule } from 'src/users/users.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local-auth.strategy'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt-atuh.strategy'
import { GoogleAuthStrategy } from './google-auth.strategy'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'this is a secret',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, LocalStrategy, GoogleAuthStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
