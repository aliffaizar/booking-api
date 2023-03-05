import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type HotelDocument = HydratedDocument<Hotel>

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
export class Hotel {
  @Prop()
  name: string

  @Prop()
  address: string

  @Prop()
  city: string

  @Prop()
  images: string[]

  @Prop()
  price: number

  @Prop()
  rating: number

  @Prop()
  description: string
}

export const HotelSchema = SchemaFactory.createForClass(Hotel)
