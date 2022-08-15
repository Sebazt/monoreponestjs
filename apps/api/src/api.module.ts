import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import swaggerConfig from '../config/swagger.config';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import appConfig from '../config/app.config';
import dataBaseConfig from '../config/database.config'
import { UserModule } from './user/user.module';
import {validate} from '../config/env.config'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [swaggerConfig, appConfig, dataBaseConfig],
      validate: validate,
      
    }),
    UserModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
