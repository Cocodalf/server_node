var express = require('express');
var translator = require ('google-translate-api');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    msg: "coucou!"
  })
});
router.post('/', function(req, res, next) {
  let post = req.body;
  console.log(req.body);
  translator(post.sentence,{
    from: post.from,
    to: post.to
  })
  .then(translation => {
    res.json({
      data: translation.text
    })
  })

});


module.exports = router;
