const { Schema, model, Types} = require("mongoose");
const reactionSchema = require("./reactions");
const thoughtSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,


    },
    reactions: [
        reactionSchema
    ]
})

const Thought = model("thought", thoughtSchema)

module.exports = Thought