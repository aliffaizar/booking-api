import { Module } from '@nestjs/common'
import { hash } from 'bcrypt'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schemas/user.schema'

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'User',
        useFactory: () => {
          const schema = UserSchema
          schema.pre('save', async function (next) {
            this.password = await hash(this.password, 8)
            next()
          })
          return schema
        },
      },
    ]),
  ],
})
export class UsersModule {}
