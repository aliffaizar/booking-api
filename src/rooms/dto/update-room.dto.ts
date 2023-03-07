import { PartialType } from '@nestjs/mapped-types'
import { CreateRoom } from './create-room.dto'

export class UpdateRoom extends PartialType(CreateRoom) {}
