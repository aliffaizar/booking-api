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
import { HotelsService } from './hotels.service'
import { CreateHotel } from './dto/create-hotel.dto'
import { UpdateHotel } from './dto/update-hotel.dto'

@ApiTags('Hotels')
@Controller()
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Post()
  create(@Body() CreateHotel: CreateHotel) {
    return this.hotelsService.create(CreateHotel)
  }

  @Get()
  findAll() {
    return this.hotelsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateHotel: UpdateHotel) {
    return this.hotelsService.update(id, UpdateHotel)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(id)
  }
}
