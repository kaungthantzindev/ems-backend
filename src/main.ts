import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const swaggerConfig = new DocumentBuilder()
    .setTitle('code test api')
    .setDescription('code test api docunmentation')
    .build()

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig)

  SwaggerModule.setup('apidoc', app, swaggerDoc)

  await app.listen(process.env.PORT ?? 3000)
  console.log(`server started at ${await app.getUrl()}`)
}
bootstrap()
