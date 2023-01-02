import mongoose from 'mongoose';

const {Schema} = mongoose;

const productSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    drawingNumber: {
        type: String,
        required: true,
    },
    revision: {
        type: String,
        default: '',
    },
    itemNumber: {
        type: String,
        default: '',
    },
    moq: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offerNumber: {
        type: String,
        default: '',
    },
}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema);
