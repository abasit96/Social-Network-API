const router = require("express").Router();
const Thought = require("../models/thought")


const getThoughts = (req, res) => {
    Thought.find({})
    .then(results => {
        res.json(results)
    })
}

const getSingleThought = (req, res) => {
    Thought.findById(req.params.id)
    .then(results => {
        res.json(results)
    })
}

const createThought = (req, res) => {
    Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
        userId: req.body.userId
    })
    .then(results => {
        res.json(results)
    })
}

const updateThought = (req, res) => {
    Thought.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    .then(results => {
        res.json(results)
    })
}

const deleteThought = (req, res) => {
    Thought.findByIdAndDelete(req.params.id)
    .then(results => {
        res.json(results)
    })
    
}

const addReaction = (req, res) => {
    Thought.findByIdAndUpdate(
        req.params.thoughtId,
        {
            $push: {
                reactions: req.body
            }
        }
    ).then(results => {
        res.json(results)
    })
}

const removeReaction = (req, res) => {
    Thought.findByIdAndUpdate(
        req.params.thoughtId,
        {
            $pull: {
                reactions: { _id: req.params.reactionId }
            }
        },
    ).then(results => {
        res.json(results)
    })

}

module.exports = {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought,
    addReaction,
    removeReaction,
}

