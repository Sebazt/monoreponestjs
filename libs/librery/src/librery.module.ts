import { Module } from '@nestjs/common';
import { LibreryService } from './librery.service';

@Module({
  providers: [LibreryService],
  exports: [LibreryService],
})
export class LibreryModule {}
