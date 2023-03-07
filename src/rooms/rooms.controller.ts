import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { RoomsService } from './rooms.service'
import { CreateRoom } from './dto/create-room.dto'
import { UpdateRoom } from './dto/update-room.dto'

@ApiTags('Rooms')
@Controller()
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(@Param('hotelId') hotelId: string, @Body() CreateRoom: CreateRoom) {
    return this.roomsService.create(CreateRoom)
  }

  @Get()
  findAll(@Param('hotelId') hotelId: string) {
    console.log(hotelId)
    return this.roomsService.findAll()
  }

  @Get(':id')
  findOne(@Param() params: { hotelId: string; id: string }) {
    return this.roomsService.findOne(params.id)
  }

  @Patch(':id')
  update(
    @Param() params: { hotelId: string; id: string },
    @Body() UpdateRoom: UpdateRoom,
  ) {
    return this.roomsService.update(params.id, UpdateRoom)
  }

  @Delete(':id')
  remove(@Param() params: { hotelId: string; id: string }) {
    return this.roomsService.remove(params.id)
  }
}
