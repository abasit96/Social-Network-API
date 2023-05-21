const router = require("express").Router();
const User = require("../../models/user")


router.get("/", (req, res) => {
    User.find({})
    .then(results => {
        res.json(results)
    })
})

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
    .then(results => {
        res.json(results)
    })
})

router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email
    })
    .then(results => {
        res.json(results)
    })
})

router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    .then(results => {
        res.json(results)
    })
})

router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(results => {
        res.json(results)
    })
    
})

router.post("/:userId/friends/:friendId", (req, res) => {
    
})

router.post()




module.exports = router;