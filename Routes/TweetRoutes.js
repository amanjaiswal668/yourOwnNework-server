const router = require('express').Router();

const tweetRouterController = require('../Controllers/Tweets');

router.post('/upload', tweetRouterController.createPost);
router.post('/update', tweetRouterController.updatePost);
module.exports = router;