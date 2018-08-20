const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with /api/user
router.route('/')
    .get(userController.findAll)
    .post(userController.create)
    .delete(userController.remove);

module.export = router;