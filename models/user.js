const { Schema, model, Types} = require("mongoose");
const userSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thought"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    ]
})

const User = model("user", userSchema)

module.exports = User