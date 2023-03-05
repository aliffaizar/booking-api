import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { RouterModule } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'

import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { HotelsModule } from './hotels/hotels.module'
import { RoomsModule } from './rooms/rooms.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}.local`,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    RouterModule.register([
      { path: 'api/users', module: UsersModule },
      { path: 'api/auth', module: AuthModule },
      {
        path: 'api/hotels',
        module: HotelsModule,
        children: [{ path: ':hotelId/rooms', module: RoomsModule }],
      },
    ]),
    UsersModule,
    AuthModule,
    HotelsModule,
    RoomsModule,
  ],
})
export class AppModule {}
