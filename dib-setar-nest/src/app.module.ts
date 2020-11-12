import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BidsModule } from './bids/bids.module';

const mongoUrl = encodeURI('mongodb+srv://mongo_user:Temp1234%@brightech-volunteer.dv1tl.mongodb.net/nest?retryWrites=true&w=majority&authSource=admin');

@Module({
  imports: [MongooseModule.forRoot(mongoUrl), BidsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
