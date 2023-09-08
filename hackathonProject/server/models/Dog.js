import { Schema } from "mongoose";



export const DogSchema = new Schema({
    name: { type: String, required: true, minlength: 1, maxlength: 50 },
    type: { type: Boolean, required: true, default: true },
    powers: { type: String, required: true, minlength: 2, maxlength: 50 },
    description: { type: String, maxlength: 500 },
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } })

DogSchema.virtual('account', {
    localField: 'acountId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

