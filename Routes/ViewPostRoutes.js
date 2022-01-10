const router = require('express').Router();

const viewPostRouterController = require('../Controllers/ViewPost');

router.post('/post', viewPostRouterController.viewPost);
// router.post('/unfollow', viewPostRouterController.unfollow);
module.exports = router;