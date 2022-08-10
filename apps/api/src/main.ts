import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { setupSwagger } from '@bsl/librery';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);

  const configSrv = app.get(ConfigService);
  const port = configSrv.get('api.port')
  console.log(port);
  
  /* const port = configSrv.get('api.port');
  console.log(port); */

  // SWAGGER
  setupSwagger(app);
  await app.listen(port);
}
bootstrap();
