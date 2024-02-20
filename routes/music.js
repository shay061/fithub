const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
    picture: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    name: String,
});

module.exports = mongoose.model("music", musicSchema);
