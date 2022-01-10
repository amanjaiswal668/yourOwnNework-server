const router = require('express').Router();

const userRouterController = require('../Controllers/User');

router.post('/create', userRouterController.createUser);
router.post('/login', userRouterController.loginUser);
module.exports = router;