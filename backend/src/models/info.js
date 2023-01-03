import mongoose from 'mongoose'

const Schema = mongoose.Schema

const InfoSchema = Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    site: { type: String },
    phone: { type: String },
    address: { type: String },
    line: { type: String, required: true },
    mrt: { type: String, required: true },
    rating: { type: Number },
    tag: [{ type: String }],
    img: { type: String },
    time: { type: Schema.Types.Mixed },
    distance: { type: String },
    walktime: { type: String },
    regular: [{ type: String }],
    limited: [{ type: String }]
}, {
        collection: 'Restaurant',
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const exportSchema = mongoose.model('Restaurant', InfoSchema)

export default exportSchema
