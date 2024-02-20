const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    gender: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },

})

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, function (err, hashedPassword) {
        if (err) return next(err);
        user.password = hashedPassword;
        next();
    });
});

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", userSchema);
