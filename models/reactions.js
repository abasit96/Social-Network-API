const { Schema, model, Types} = require("mongoose");
const reactionSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // this where the getter method will be put


    },
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => {
            return new Types.ObjectId()
        }
    }
})


module.exports = reactionSchema