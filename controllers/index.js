const router = require("express").Router();
const userRoutes = require("./api/user-routes");
const thoughtRoutes = require("./api/thought-routes")
// thoughtRoutes

router.use("/api/users", userRoutes);
router.use("/api/thoughts")
// /api/thoughts

module.exports = router;