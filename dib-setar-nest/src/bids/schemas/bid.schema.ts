import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Exclude } from 'class-transformer';

export type BidDocument = Bid & Document;

@Schema()
export class Bid {
    @Prop({index: true})
    createdByUserId: string;

    @Prop()
    calledByUserIds: MongooseSchema.Types.ObjectId[];

    @Prop(raw({
        state: { type: String, required: true },
        city: { type: String, required: true }
    }))
    pickupAddress: Record<string, any>

    @Prop(raw({
        state: { type: String, required: true },
        city: { type: String, required: true }
    }))
    deliveryAddress: Record<string, any>

    @Prop({required: true})
    pickupAmount: number;

    @Prop({required: true})
    delivery: number;

    @Prop({required: true})
    rate: number;

    @Prop({index: true, required: true})
    updatedAt: Date;

    @Prop({index: true, required: true})
    createdAt: Date;

    @Prop({required: true})
    notes: any[]

    @Prop()
    createdBy: {
        _id: string;
        firstName: string;
        lastName: string;
        company: string;
        userCode: string;
        email: string;
        password: string;
    };
}

export const BidSchema = SchemaFactory.createForClass(Bid);