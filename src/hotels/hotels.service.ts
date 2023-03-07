import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateHotel } from './dto/create-hotel.dto'
import { UpdateHotel } from './dto/update-hotel.dto'
import { Hotel, HotelDocument } from './schemas/hotel.schema'

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async create(CreateHotel: CreateHotel) {
    return await this.hotelModel.create(CreateHotel)
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

  update(id: string, UpdateHotel: UpdateHotel) {
    return `This action updates a #${id} hotel`
  }

  remove(id: string) {
    return `This action removes a #${id} hotel`
  }
}
