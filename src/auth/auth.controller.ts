import {
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { GoogleAuthGuard } from './google-auth.guard'
import { LocalAuthGuard } from './local-auth.guard'

@ApiTags('Authentication')
@Controller('')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Response() res) {
    const token = this.authService.login(req.user)
    res.cookie('access_token', token, { httpOnly: true })
    return res.send({ token })
  }

  @Get('logout')
  async logout(@Response() res) {
    res.clearCookie('access_token')
    return res.send({ message: 'Logout successful' })
  }

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Response() res) {
    const token = await this.authService.googleLogin(req)
    res.cookie('access_token', token, { httpOnly: true })
    res.redirect('http://localhost:3001/api/hotels')
  }
  @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(@Request() req, @Response() res) {
    const token = await this.authService.register(req.body)
    res.cookie('access_token', token, { httpOnly: true })
    return res.send({ token })
  }
}
