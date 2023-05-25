const router = require("express").Router();

const {
    getAllUsers, 
    findUserById, 
    createUser, 
    updateUser, 
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/user-controller")

router.get("/", getAllUsers)

router.get("/:id", findUserById)

router.post("/", createUser)

router.put("/:id", updateUser )

router.delete("/:id", deleteUser )

// adding friend
router.post("/:userId/friends/:friendId", addFriend)

// removing a friend
router.delete("/:userId/friends/:friendId", removeFriend)

module.exports = router;












// const {
//   getUsers,
//   getSingleUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   addFriend,
//   removeFriend,
// } = require('../../controllers/user-controller');

// // /api/Thought
// router.route('/').get(getUsers).post(createUser);

// // /api/Thought/:ThoughtId
// router
//   .route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
module.exports = router;
