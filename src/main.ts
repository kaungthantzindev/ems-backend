import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

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
