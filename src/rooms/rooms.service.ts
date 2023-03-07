import { Injectable } from '@nestjs/common'
import { CreateRoom } from './dto/create-room.dto'
import { UpdateRoom } from './dto/update-room.dto'

@Injectable()
export class RoomsService {
  create(CreateRoom: CreateRoom) {
    return 'This action adds a new room'
  }

  findAll() {
    return `This action returns all rooms`
  }

  findOne(id: string) {
    return `This action returns a #${id} room`
  }

  update(id: string, UpdateRoom: UpdateRoom) {
    return `This action updates a #${id} room`
  }

  remove(id: string) {
    return `This action removes a #${id} room`
  }
}
