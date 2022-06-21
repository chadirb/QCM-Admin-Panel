var express = require('express');
var router = express.Router();


const { getLanguage, createLanguage, readLanguage, updateLanguage, deleteLanguage } = require('../controllers/language');

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

router.route('/language')
    .get(getLanguage)
    .post(createLanguage);


//read, update and delete specific languages
router.route('/language/:languageid')
    .get(readLanguage)
    .put(updateLanguage)
    .delete(deleteLanguage);


module.exports = router;
