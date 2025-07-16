const express = require("express")
const router = express.Router();
const {handleGenerateurl, handleGetAnalytics, handleRedirection} = require('../controllers/url')
router.post('/', handleGenerateurl)

router.get('/:shortId', handleRedirection);

router.get('/analytics/:shortid', handleGetAnalytics)


module.exports = router;
