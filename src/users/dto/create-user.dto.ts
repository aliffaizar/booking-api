import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class CreateUser {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string

  @ApiProperty({ example: 'johndoe@gmail.com' })
  @IsString()
  @IsEmail({}, { message: 'Invalid email address' })
  email: string

  @ApiProperty({ example: 'strong_password_123' })
  @IsString()
  password: string
  avatar?: string
  googleId?: string
}
