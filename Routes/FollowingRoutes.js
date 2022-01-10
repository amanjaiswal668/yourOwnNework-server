const router = require('express').Router();

const followRouterController = require('../Controllers/Followers');

router.post('/follow', followRouterController.follow);
router.post('/unfollow', followRouterController.unfollow);
module.exports = router;