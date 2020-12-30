const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true,
        },
        msrp: {
            type: Number,
            required: true,
        },
        shadeCount: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            type: String,
            required: true,
        },
        reviews: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("product", productSchema)