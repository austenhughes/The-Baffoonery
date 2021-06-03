const router = require("express").Router();
const jokesController = require("../../controllers/userController");

// Matches with "/api/jokes"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/jokes/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
