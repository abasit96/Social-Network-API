const router = require("express").Router();
const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought, 
    deleteThought,
    addReaction,
    removeReaction,
} = require("../../controllers/thought-controller")

router.get("/", getThoughts)

router.get("/:id", getSingleThought)

router.post("/", createThought)

router.put("/:id", updateThought)

router.delete("/:id", deleteThought)

// add reaction
router.post("/:thoughtId/reactions/:reactionId", addReaction)

// remove reaction
router.delete("/:thoughtId/reactions/:reactionId", removeReaction )


module.exports = router;
























// const {
//   getThoughts,
//   getSingleThought,
//   createThought,
//   updateThought,
//   deleteThought,
//   addReaction,
//   removeReaction,
// } = require('../../controllers/thought-controller');

// // /api/Thought
// router.route('/').get(getThoughts).post(createThought);

// // /api/Thought/:ThoughtId
// router
//   .route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
// router.route('/:thoughtId/reactions').post(addReaction);
// router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);
// module.exports = router;
