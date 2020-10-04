import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BidsController } from './bids.controller';
import { Bid, BidSchema } from './schemas/bid.schema';
import { BidsService } from './bids.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bid.name, schema: BidSchema }])],
  controllers: [BidsController],
  providers: [BidsService]
})
export class BidsModule {}
