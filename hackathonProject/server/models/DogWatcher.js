import { Schema } from "mongoose";


export const DogWatcherSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    dogId: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true, JSON: { virtuals: true } })


DogWatcherSchema.virtual('dog', {
    localField: 'dogId',
    ref: 'Dog',
    foreignField: '_id',
    justOne: true
})

DogWatcherSchema.virtual('profile', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})