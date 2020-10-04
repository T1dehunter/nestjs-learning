import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { BidDocument, Bid } from './schemas/bid.schema';
// import { Bid } from './interfaces/bid.interface';
// import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class BidsService {
    constructor(@InjectModel(Bid.name) private bidModel: Model<BidDocument>) {}

    // async create(createCatDto: CreateCatDto): Promise<Cat> {
    //     const createdCat = new this.catModel(createCatDto);
    //     return createdCat.save();
    // }

    async findAll(): Promise<Bid[]> {
        const bidsDocuments = await this.bidModel.find().exec();
        return bidsDocuments;
    }
}
