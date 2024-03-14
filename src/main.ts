import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );

   //SIGNA EL PUERTO DEL SERVIDOR QUE VA A ALOJAR LA APLICACION
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
