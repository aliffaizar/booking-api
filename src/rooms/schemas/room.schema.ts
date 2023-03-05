import { Prop, Schema } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { Hotel } from 'src/hotels/schemas/hotel.schema'

export type RoomDocument = mongoose.HydratedDocument<Room>

@Schema({
  timestamps: true,
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id
      return ret
    },
  },
})
export class Room {
  @Prop()
  name: string

  @Prop()
  description: string

  @Prop()
  price: number

  @Prop()
  maxGuests: number

  @Prop()
  bed: string

  @Prop()
  images: string[]

  @Prop()
  roomNumbers: [
    {
      number: number
      unavailableDates: Date[]
    },
  ]

  @Prop()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' })
  hotel: Hotel
}
