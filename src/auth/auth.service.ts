import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare } from 'bcrypt'
import { CreateUser } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async comparePassword(password: string, hashed: string): Promise<boolean> {
    return await compare(password, hashed)
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email)
    if (user && (await this.comparePassword(password, user.password))) {
      return user
    }
    return null
  }

  async login(user: any) {
    console.log('user', user)
    const payload = { id: user.id }

    return this.jwtService.sign(payload)
  }

  async googleLogin(req) {
    if (!req.user) {
      return 'No user from Google'
    }

    const payload = { id: req.user.id }
    return this.jwtService.sign(payload)
  }

  async register(CreateUser: CreateUser) {
    try {
      return await this.userService.create(CreateUser)
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException('Email already exists')
      } else {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
  }
}
