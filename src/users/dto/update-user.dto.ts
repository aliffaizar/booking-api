import { ApiProperty } from '@nestjs/swagger'

export class UpdateUser {
  @ApiProperty({ example: 'John Doe', required: false })
  name?: string

  @ApiProperty({ example: 'jhondoe@mail.com', required: false })
  email?: string
  password?: string

  @ApiProperty({ example: 'https://example.com/avatar.png', required: false })
  avatar?: string
  googleId?: string
}
