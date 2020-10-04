import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BidsModule } from './bids/bids.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/dib-setar'), BidsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
