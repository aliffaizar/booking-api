import { IsString, IsNotEmpty } from 'class-validator'

export class CreateHotelDto {
  @IsString()
  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsString()
  city: string
  images: string[]
  price?: number
  rating?: number
  description: string
}
