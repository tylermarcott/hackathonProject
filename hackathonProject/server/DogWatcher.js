import { Schema } from "mongoose";


export const DogWatcherSchema = new Schema({
    accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    comment: { type: String, required: true, minlength: 3, maxlength: 150 },
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