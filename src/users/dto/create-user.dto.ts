import { IsEmail, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  name: string

  @IsString()
  @IsEmail({}, { message: 'Invalid email address' })
  email: string

  @IsString()
  password: string
  avatar?: string
  googleId?: string
}
