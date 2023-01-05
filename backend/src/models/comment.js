import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = Schema({
    restaurantId: { type: Number, required: true },
    author: { type: String, required: true },
    text: { type: String },
    imgurl: { type: String },
    rating: { type: String }
}, {
    collection: 'Comment',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Comment', CommentSchema)

export default exportSchema
