const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes")
// thoughtRoutes

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
// /api/thoughts

module.exports = router;