const User = require("../models/user")

const getAllUsers = (req, res) => {
    User.find({})
    .populate("friends")
    .then(results => {
        res.json(results)
    })
}

const findUserById = (req, res) => {
    User.findById(req.params.id)
    .populate("friends")
    .then(results => {
        res.json(results)
    })
}

const createUser = (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email
    })
    .then(results => {
        res.json(results)
    })
}

const updateUser = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    .then(results => {
        res.json(results)
    })
}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(results => {
        res.json(results)
    })
    
}

const addFriend = (req, res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            $push: {
                friends: req.params.friendId
            }
        }
    ).then(results => {
        res.json(results)
    })

}

const removeFriend = (req, res) => {
    User.findByIdAndUpdate(
        req.params.userId,
        {
            $pull: {
                friends: req.params.friendId
            }
        }
    ).then(results => {
        res.json(results)
    })

}

module.exports = {
    getAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
}

