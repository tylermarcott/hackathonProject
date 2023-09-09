import { Schema } from "mongoose";


export const CommentSchema = new Schema({
    body: { type: String, maxlength: 100, required: true },
    accountId: { type: Schema.Types.ObjectId, required: true },
    dogId: { type: Schema.Types.ObjectId, required: true },
    // watcherId: { type: Schema.Types.ObjectId, required: true }

}, { timestamps: true, JSON: { virtuals: true } })

CommentSchema.virtual('profile', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})
CommentSchema.virtual('dog', {
    localField: 'dogId',
    ref: 'Dog',
    foreignField: '_id',
    justOne: true
})
CommentSchema.virtual('watcher', {
    localField: 'watcherId',
    ref: 'DogWatcher',
    foreignField: '_id',
    justOne: true
})