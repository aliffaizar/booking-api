import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { RoomsService } from './rooms.service'
import { CreateRoomDto } from './dto/create-room.dto'
import { UpdateRoomDto } from './dto/update-room.dto'

@Controller()
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  create(
    @Param('hotelId') hotelId: string,
    @Body() createRoomDto: CreateRoomDto,
  ) {
    return this.roomsService.create(createRoomDto)
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
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomsService.update(params.id, updateRoomDto)
  }

  @Delete(':id')
  remove(@Param() params: { hotelId: string; id: string }) {
    return this.roomsService.remove(params.id)
  }
}
