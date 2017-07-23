const router = require('express').Router();

/*  "/twitter"
 *    GET: Redirect the user to Twitter for authentication.
 *  "/twitter/callback"
 *    GET:  Finish the authentication process.
 */

const login = (req, res, next) => {
  res.json({login: 'redirect to twitter'});
}

const authenticate = (req, res, next) => {
  res.json({authenticate: 'obtain token'});
}

router.get('/twitter', login);
router.post('/twitter/callback', authenticate);

module.exports = router;