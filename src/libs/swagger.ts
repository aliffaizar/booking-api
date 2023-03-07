import { DocumentBuilder } from '@nestjs/swagger'

const swaggerConfig = new DocumentBuilder()
  .setTitle('Booking API')
  .setDescription('Booking API with NestJS')
  .setVersion('1.0')
  .build()

export default swaggerConfig
