import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateRoom } from './dto/create-room.dto'
import { UpdateRoom } from './dto/update-room.dto'
import { Room, RoomDocument } from './schemas/room.schema'

@Injectable()
export class RoomsService {
  constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}
  async create(CreateRoom: CreateRoom, hotelId: string) {
    return await this.roomModel.create({ ...CreateRoom, hotel: hotelId })
  }

  async findAll() {
    return await this.roomModel.find()
  }

  async findOne(id: string) {
    return await this.roomModel.findById(id)
  }

  async update(id: string, UpdateRoom: UpdateRoom) {
    return await this.roomModel.findByIdAndUpdate(id, UpdateRoom)
  }

  async remove(id: string) {
    return await this.roomModel.findByIdAndDelete(id)
  }
}
