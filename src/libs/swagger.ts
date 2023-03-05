import { DocumentBuilder } from '@nestjs/swagger'

const swaggerConfig = new DocumentBuilder()
  .setTitle('NestJS API')
  .setDescription('NestJS API description')
  .setVersion('1.0')
  .addTag('NestJS')
  .build()

export default swaggerConfig
