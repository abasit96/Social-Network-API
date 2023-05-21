const router = require("express").Router();
const Thought = require("../../models/thought")


router.get("/", (req, res) => {
    Thought.find({})
    .then(results => {
        res.json(results)
    })
})

router.get("/:id", (req, res) => {
    Thought.findById(req.params.id)
    .then(results => {
        res.json(results)
    })
})

router.post("/", (req, res) => {
    Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
        userId: req.body.userId
    })
    .then(results => {
        res.json(results)
    })
})

router.put("/:id", (req, res) => {
    Thought.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    .then(results => {
        res.json(results)
    })
})

router.delete("/:id", (req, res) => {
    Thought.findByIdAndDelete(req.params.id)
    .then(results => {
        res.json(results)
    })
    
})




module.exports = router;