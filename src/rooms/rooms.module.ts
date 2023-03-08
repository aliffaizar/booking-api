import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { RoomsService } from './rooms.service'
import { RoomsController } from './rooms.controller'
import { RoomSchema } from './schemas/room.schema'

@Module({
  controllers: [RoomsController],
  providers: [RoomsService],
  imports: [MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])],
})
export class RoomsModule {}
