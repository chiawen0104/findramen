import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PostSchema = Schema({
    restaurantId: { type: Number, required: true },
    writer: { type: String, required: true },
    content: { type: String },
    time: { type: String },
    url: { type: String }
}, {
    collection: 'Post',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Post', InfoSchema)

export default exportSchema