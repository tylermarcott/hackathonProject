import { Schema } from "mongoose";


export const DogWatcherSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    dogId: { type: Schema.Types.ObjectId, required: true }
})