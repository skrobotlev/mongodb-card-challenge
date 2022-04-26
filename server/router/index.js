const cardsController = require("../controllers/cards-controller");

const Router = require("express").Router;
// const userController = require("../controllers/user-controller");
const router = new Router();
// const { body } = require("express-validator");
// const authMiddleware = require("../middlewares/auth-middleware");

// router.post(
//   `/registration`,
//   body("email").isEmail(),
//   body("password").isLength({ min: 3, max: 32 }),
//   userController.registration
// );
router.post(`/card`, cardsController.addCard);

router.get(`/cards`, cardsController.getCards);

module.exports = router;
