import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import swaggerConfig from '../config/swagger.config';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { UserModule } from './user/user.module';
import appConfig from '../config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [swaggerConfig, appConfig],
    }),
    UserModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
