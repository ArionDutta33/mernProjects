const mongoose = require("mongoose")
const photographerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: true
    },
    password: String,
    phone: Number,
    address: String,
    bio: String,
    profilePic: String,
    bgpic: String,
    portfolioImages: [
        {
            type: String
        }
    ],
    pricing: Number,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    }]
})

const Photographer = mongoose.model("Photographer", photographerSchema);
module.exports = Photographer