import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateRoom {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  price: number

  @IsNotEmpty()
  @IsNumber()
  maxGuests: number

  @IsNotEmpty()
  @IsString()
  bed: string

  images: string[]

  hotel: string
}
