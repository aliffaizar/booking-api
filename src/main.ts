import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import helmet from 'helmet'
import { AppModule } from './app.module'
import swaggerConfig from './libs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(helmet({ contentSecurityPolicy: false, referrerPolicy: false }))
  app.use(cookieParser())

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/', app, document)
  await app.listen(3001)
}
bootstrap()
