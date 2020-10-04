import { Controller, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';

// import { CreateCatDto } from './dto/create-cat.dto';
import { BidsService } from './bids.service';
import { Bid } from './interfaces/bid.interface';

@Controller('bids')
export class BidsController {
    constructor(private bidsService: BidsService) {}

    // @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    async findAll(): Promise<any> {
        const allBids = await this.bidsService.findAll();
        return allBids;
    }
}
