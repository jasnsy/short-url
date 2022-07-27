import mongoose from "mongoose";

const ShortUrlSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date
    }
});

export default mongoose.model('ShortUrl', ShortUrlSchema);
