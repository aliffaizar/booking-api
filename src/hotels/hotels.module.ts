import { Module } from '@nestjs/common'
import { HotelsService } from './hotels.service'
import { HotelsController } from './hotels.controller'
import { HotelSchema } from './schemas/hotel.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Hotel', schema: HotelSchema }]),
  ],
})
export class HotelsModule {}
