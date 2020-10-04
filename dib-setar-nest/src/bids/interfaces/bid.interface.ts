type Address = {
    city: string;
    state: string;
}

type Note = {
    text: string;
    createdBy: any;
}

export interface Bid {
    id: string;
    pickupAddress: Address;
    deliveryAddress: Address;
    notes: Note[];
    pickupAmount: number;
    deliveryAmount: number;
    rate: number;
    createdBy: any;
}