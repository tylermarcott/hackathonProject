import { Schema } from "mongoose";


export const CommentSchema = new Schema({
    body: { type: String, maxlength: 100, required: true },
    accountId: { type: Schema.Types.ObjectId, required: true }
}, { timestamps: true, JSON: { virtuals: true } })

CommentSchema.virtual('profile', {
    localField: 'accountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})