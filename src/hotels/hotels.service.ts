import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateHotelDto } from './dto/create-hotel.dto'
import { UpdateHotelDto } from './dto/update-hotel.dto'
import { Hotel, HotelDocument } from './schemas/hotel.schema'

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async create(createHotelDto: CreateHotelDto) {
    return await this.hotelModel.create(createHotelDto)
  }

  async findAll() {
    return await this.hotelModel.find()
  }

  async findOne(id: string) {
    try {
      return await this.hotelModel.findById(id)
    } catch (error) {
      throw new NotFoundException(`Hotel with id ${id} not found`)
    }
  }

  update(id: string, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`
  }

  remove(id: string) {
    return `This action removes a #${id} hotel`
  }
}
